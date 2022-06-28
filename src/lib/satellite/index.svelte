<script>
  import { DEG2RAD } from "three/src/math/MathUtils";
  import {
    Canvas,
    AmbientLight,
    DirectionalLight,
    Group,
    HemisphereLight,
    OrbitControls,
    PerspectiveCamera,
    GLTF,
  } from "threlte";
  import { spring } from "svelte/motion";

  const scale = spring(3);
</script>

<div class="h-full w-full bg-gradient-to-t from-orange-100 border-4 border-black">
  <Canvas>
    <PerspectiveCamera position={{ x: 1000, y: 1000, z: 1000 }} fov={30}>
      <OrbitControls
        minPolarAngle={DEG2RAD * 70}
        maxPolarAngle={DEG2RAD * 85}
        minAzimuthAngle={DEG2RAD * 50}
        maxAzimuthAngle={DEG2RAD * 80}
        autoRotate={true}
        enableZoom={false}
      />
    </PerspectiveCamera>

    <DirectionalLight shadow position={{ x: 10, y: 10, z: 10 }} intensity={0.7} />
    <DirectionalLight position={{ x: 3, y: 10, z: 10 }} intensity={0.7} />
    <AmbientLight color={0xd7681c} intensity={0.4} />
    <HemisphereLight skyColor={0xfb9796} groundColor={0xc1b8a5} />

    <Group scale={$scale}>
      <GLTF
        interactive
        on:pointerenter={() => ($scale = $scale + $scale * 0.05)}
        on:pointerleave={() => ($scale = $scale - $scale * 0.05)}
        url={"/models/greatbasin.glb"}
        position={{ x: -2, y: -1 }}
        scale={$scale}
      />
    </Group>
  </Canvas>
</div>
