import * as THREE from 'three'
import {MTLLoader, OBJLoader} from 'three-obj-mtl-loader'
import astronautobj from '../images/Astronaut.obj';
import astronautmtl from '../images/Astronaut.mtl';

let scene = new THREE.Scene()
 
let mtlLoader = new MTLLoader();
 
let objLoader = new OBJLoader();
 
mtlLoader.load({astronautmtl}, (materials) => {
  materials.preload()
  objLoader.setMaterials(materials)
  objLoader.load({astronautobj}, (object) => {
    scene.add(object)
  })
})

export default Astronaut;