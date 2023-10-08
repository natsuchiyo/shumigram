import { BufferGeometryProps, BufferAttributeProps, MeshBasicMaterialProps, MeshProps, MeshNormalMaterialProps, SphereBufferGeometryProps, GridHelperProps, SpriteProps, SpriteMaterialProps, TextureProps, MeshLambertMaterialProps, BoxGeometryProps, MeshStandardMaterialProps, LineBasicMaterialProps, DirectionalLightProps, PlaneGeometryProps } from "@react-three/fiber";



//---------------------------------------------------------------------
// node_modules\@react-three\fiber\dist\declarations\src\three-types.d.tsの下記をコメントアウトさせる
//
// declare global {
//     namespace JSX {
//         interface IntrinsicElements extends ThreeElements {
//         }
//     }
// }
//---------------------------------------------------------------------



declare global {
    namespace JSX {
        interface IntrinsicElements {
            mesh: MeshProps;
            bufferGeometry: BufferGeometryProps;
            bufferAttribute: BufferAttributeProps;
            meshBasicMaterial: MeshBasicMaterialProps;
            sphereBufferGeometry: SphereBufferGeometryProps;
            meshNormalMaterial: MeshNormalMaterialProps;
            gridHelper: GridHelperProps;
            sprite: SpriteProps;
            spriteMaterial: SpriteMaterialProps;
            texture: TextureProps;
            meshLambertMaterial: MeshLambertMaterialProps;
            boxGeometry: BoxGeometryProps;
            meshStandardMaterial: MeshStandardMaterialProps;
            lineBasicMaterial: LineBasicMaterialProps;
            directionalLight: DirectionalLightProps;
            planeGeometry: PlaneGeometryProps;
        }
    }
}