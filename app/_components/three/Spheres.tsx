import { Merged } from "@react-three/drei";
import { memo } from "react";
import { Mesh, MeshNormalMaterial, SphereGeometry } from "three";



export const Spheres = memo(function Spheres(props: {
    data: [number, number, number][];
    // material?: any;
    shouldMerge?: boolean;
}) {


    return props.shouldMerge ? (
        <Merged meshes={sphereMeshes} >
            {(Sphere: any) => props.data.map((position, i) => (
                <Sphere key={i} position={position} />
            ))}
        </Merged>
    ) : (
        <>
            {props.data.map((position, i) => (
                <mesh key={i} position={position}>
                    <sphereBufferGeometry args={sphereGeoArgs} />
                    <meshNormalMaterial />
                </mesh>
            ))}
        </>
    );
});


const sphereGeoArgs: [number, number, number] = [0.2, 5, 5];

const sphereMeshes = [
    new Mesh(
        new SphereGeometry(...sphereGeoArgs),
        new MeshNormalMaterial()
    )];
