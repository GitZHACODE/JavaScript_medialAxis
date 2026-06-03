import { MedialAxisTransform } from '../src/medialAxis.js';
import { Vector2D } from '../src/utils/vector2d.js';

// Simple assertion framework
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

// Transform functions for D4 group
const transforms = {
  Identity: (p) => new Vector2D(p.x, p.y),
  Rot90: (p) => new Vector2D(-p.y, p.x),
  Rot180: (p) => new Vector2D(-p.x, -p.y),
  Rot270: (p) => new Vector2D(p.y, -p.x),
  ReflectX: (p) => new Vector2D(-p.x, p.y),
  ReflectY: (p) => new Vector2D(p.x, -p.y),
  ReflectDiag1: (p) => new Vector2D(p.y, p.x),
  ReflectDiag2: (p) => new Vector2D(-p.y, -p.x),
};

function matchPoints(ptsA, ptsB, tol = 12.0) {
  if (ptsA.length !== ptsB.length) return false;
  const matched = new Set();
  for (const a of ptsA) {
    let found = false;
    for (let i = 0; i < ptsB.length; i++) {
      if (matched.has(i)) continue;
      if (a.dist(ptsB[i]) < tol) {
        matched.add(i);
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

function runSymmetryTests() {
  console.log("=== RUNNING DIHEDRAL GROUP D4 SYMMETRY TESTS ===\n");

  // Create symmetric square donut (centered at 0, 0)
  const s = 600;
  const cx = 0, cy = 0;
  const sqdonut = [
    new Vector2D(cx - s*0.01, cy + s*0.3),
    new Vector2D(cx - s*0.3,  cy + s*0.3),
    new Vector2D(cx - s*0.3,  cy - s*0.3),
    new Vector2D(cx + s*0.3,  cy - s*0.3),
    new Vector2D(cx + s*0.3,  cy + s*0.3),
    new Vector2D(cx + s*0.01, cy + s*0.3),
    new Vector2D(cx + s*0.01, cy + s*0.1),
    new Vector2D(cx + s*0.1,  cy + s*0.1),
    new Vector2D(cx + s*0.1,  cy - s*0.1),
    new Vector2D(cx - s*0.1,  cy - s*0.1),
    new Vector2D(cx - s*0.1,  cy + s*0.1),
    new Vector2D(cx - s*0.01, cy + s*0.1)
  ];
  sqdonut[0].isBridge = true;
  sqdonut[5].isBridge = true;
  sqdonut[6].isBridge = true;
  sqdonut[11].isBridge = true;

  // Base computation
  const matBase = new MedialAxisTransform(sqdonut);
  const skeletonBase = matBase.computeStructuredSkeleton(25);
  const resultBase = matBase.simplifySkeleton(skeletonBase.regularPoints, skeletonBase.junctionPoints, 20);

  console.log(`Base Nodes Count: ${resultBase.nodes.length}`);
  console.log(`Base Edges/Segments Count: ${resultBase.segments.length}`);
  
  // Ensure we have a closed loop (which has equal nodes and edges count >= 4)
  assert(resultBase.nodes.length >= 4, "Sufficient nodes in simplified skeleton");
  assert(resultBase.segments.length === resultBase.nodes.length, "Closed loop verified (nodes count === edges count)");

  for (const [name, transform] of Object.entries(transforms)) {
    console.log(`Testing D4 Transformation: ${name}`);
    
    // Transform original polygon
    const transformedPolygon = sqdonut.map(v => {
      const tv = transform(v);
      if (v.isBridge) tv.isBridge = true;
      return tv;
    });

    const matTransformed = new MedialAxisTransform(transformedPolygon);
    const skeletonTrans = matTransformed.computeStructuredSkeleton(25);
    const resultTrans = matTransformed.simplifySkeleton(skeletonTrans.regularPoints, skeletonTrans.junctionPoints, 20);

    // Transform base nodes for comparison
    const expectedNodes = resultBase.nodes.map(transform);

    // Verify nodes match
    const nodesMatch = matchPoints(expectedNodes, resultTrans.nodes, 12.0);
    assert(nodesMatch, `Nodes match under ${name}`);
    
    // Verify segments count
    assert(resultTrans.segments.length === resultBase.segments.length, `Segments count matches under ${name}`);
    console.log(`[PASS] ${name} validation`);
  }

  console.log("\n=== ALL D4 SYMMETRY TESTS PASSED SUCCESSFULY ===");
}

runSymmetryTests();
