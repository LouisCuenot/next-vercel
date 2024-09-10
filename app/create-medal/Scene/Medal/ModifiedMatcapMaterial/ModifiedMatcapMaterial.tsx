import { useAssets } from '@/app/create-medal/context/AssetsContext'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { MathUtils, MeshMatcapMaterial, Uniform } from 'three'

const ModifiedMatcapMaterial = () => {

    const materialRef = useRef<MeshMatcapMaterial>(null!)
     const {textures} = useAssets()

     const {currentPage, currentMetal} = useMedal()

     const opacRef = useRef(1)

     useEffect(()=>{
        if(materialRef.current){
            materialRef.current.userData = {
                uMetalTransitionValue:new Uniform(0),
                //uOpac:new Uniform(1),
                uMetalValue:new Uniform(0)
            }
        }
     },[])

     useEffect(()=>{
        if(currentMetal === 'bronce'){
            materialRef.current.userData.uMetalValue.value = 2
        }else if(currentMetal === 'silver'){
            materialRef.current.userData.uMetalValue.value = 1
        }else{
            materialRef.current.userData.uMetalValue.value = 0
        }
     },[currentMetal])

     //useEffect(()=>{
     //   if(currentPage === "configurator"){
     //       opacRef.current = 1
     //   }else if(currentPage === 'intro'){
     //       opacRef.current = 0
     //   }
     //},[currentPage])



    //useFrame(({clock})=>{
    //    if(materialRef.current.userData.uOpac){
    //        materialRef.current.userData.uOpac.value = MathUtils.lerp(materialRef.current.userData.uOpac.value,opacRef.current,0.1)
    //    }
    //    if(materialRef.current.userData.uMetalTransitionValue){
    //        materialRef.current.userData.uMetalTransitionValue.value = Math.floor(clock.elapsedTime)%2
    //    }
    //})


  return (
    <meshMatcapMaterial
        ref={materialRef}
        bumpMap={textures.medalBump}
        bumpScale={2}
        transparent={true}
        onBeforeCompile={(shader)=>{
            shader.uniforms.uGoldMatcap = new Uniform(textures.gold)
            shader.uniforms.uSilverMatcap = new Uniform(textures.silver)
            shader.uniforms.uBronceMatcap = new Uniform(textures.bronce)
            shader.uniforms.uMetalValue = new Uniform(0)
            shader.uniforms.uMetalTransitionValue = new Uniform(0)
            //shader.uniforms.uOpac = new Uniform(1)
            shader.vertexShader = shader.vertexShader.replace(
                `varying vec3 vViewPosition;`,
                `
                    varying vec3 vViewPosition;
                    varying vec2 vPos;
                `
            )
            shader.vertexShader = shader.vertexShader.replace(
                `#include <begin_vertex>`,
                `
                    #include <begin_vertex>
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vPos = worldPosition.xy;
                `
            )
            shader.fragmentShader = shader.fragmentShader.replace(
                `uniform sampler2D matcap;`,
                `
                uniform sampler2D matcap;
                uniform sampler2D uGoldMatcap;
                uniform sampler2D uSilverMatcap;
                uniform sampler2D uBronceMatcap;
                uniform float uMetalTransitionValue;
                uniform float uMetalValue;
                //uniform float uOpac;
                varying vec2 vPos;
                `
            )
            shader.fragmentShader = shader.fragmentShader.replace(
                `#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif`,
            `
                vec4 goldTexture = texture2D(uGoldMatcap,uv);
                vec4 silverTexture = texture2D(uSilverMatcap,uv);
                vec4 bronceTexture = texture2D(uBronceMatcap,uv);
                vec4 goldSilv = mix(goldTexture, silverTexture, uMetalValue);
                vec4 final = mix(goldSilv, bronceTexture,max(0.0,uMetalValue-1.0));
                vec4 matcapColor = final;
            `
            )
            shader.fragmentShader = shader.fragmentShader.replace(
                `#include <opaque_fragment>`,
                `
                //gl_FragColor = vec4(outgoingLight,1.0-step((uOpac*2.5)-1.1,vPos.y));
                gl_FragColor = vec4(outgoingLight,1.0);
                `
            )
            materialRef.current.userData = shader.uniforms
            //console.log(shader.fragmentShader)
        }}
    />
  )
}

export default ModifiedMatcapMaterial