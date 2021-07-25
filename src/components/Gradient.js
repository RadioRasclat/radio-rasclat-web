import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { WebGLRenderer, LinearFilter, TextureLoader, Camera, Scene, PlaneBufferGeometry, Vector2, ShaderMaterial, Mesh } from 'three';

function Gradient() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );
    containerRef.current.appendChild(renderer.domElement);

    const camera = new Camera();
    camera.position.z = 1;

    const scene = new Scene();
    const geometry = new PlaneBufferGeometry(2, 2);
    const texture = new TextureLoader().load( '/noise.png' );
    texture.magFilter = texture.minFilter = LinearFilter;
    texture.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const uniforms = {
      u_time: { type: "f", value: 1.0 },
      u_resolution: { type: "v2", value: new Vector2(
          window.innerWidth * (window.innerWidth > 720 ? 1 : 3),
          window.innerHeight * (window.innerWidth > 720 ? 1 : 1)
        ) },
      u_mouse: { type: "v2", value: new Vector2(
          window.innerWidth / 2,
          window.innerHeight / 2
        ) },
      u_texture: { type: "t", value: texture },
    };

    const material = new ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader: window.innerWidth < 720 ? fragmentShaderMobile : fragmentShader,
      dithering: true,
    });

    const mesh = new Mesh(geometry, material);

    const onResize = () => {
      renderer.setSize( window.innerWidth, window.innerHeight );
      uniforms.u_resolution.value.x = renderer.domElement.width / 2;
      uniforms.u_resolution.value.y = renderer.domElement.height;
    };

    const onMove = e => {
      uniforms.u_mouse.value.x = e.pageX;
      uniforms.u_mouse.value.y = e.pageY;
    };

    scene.add(mesh);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', onResize);


    const animate = () => {
      requestAnimationFrame( animate );
      render();
    };

    const render = () => {
      uniforms.u_time.value += 0.05;
      renderer.render( scene, camera );
    };

    animate();
  }, []);

  return (
    <Container ref={containerRef}>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.isAbove && 99};
`;

const vertexShader = `
  void main() {
    gl_Position = vec4( position, 1.0 );
  }
`;

const fragmentShader = `
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
#define PI_TWO			1.570796326794897
#define PI				3.141592653589793
#define TWO_PI			6.283185307179586
vec2 coord(in vec2 p) {
	p = p / u_resolution.xy;
	// correct aspect ratio
	if (u_resolution.x > u_resolution.y) {
		p.x *= u_resolution.x / u_resolution.y;
		p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
	} else {
		p.y *= u_resolution.y / u_resolution.x;
		p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
	}
	// centering
	p -= 0.5;
	p *= vec2(-0.5, 0.5);
	return p;
}
#define rx 1.0 / min(u_resolution.x, u_resolution.y)
#define uv gl_FragCoord.xy / u_resolution.xy
#define st coord(gl_FragCoord.xy)
#define mx coord(u_mouse)
void main() {
  // vec3 color = vec3(
  //   0.6798039216 * abs(cos(st.x + mx.x * st.x)),
  //   0.4935294118 * abs(cos(st.y + mx.y * st.y)),
  //   0.397254902 * abs(cos(st.y + mx.y * st.x))
  // );
  vec3 color = vec3(
		abs(cos(st.x + mx.x) * 0.8),
		abs(sin(st.y + mx.y) * 0.8),
		abs(sin(st.y + mx.x) * 0.8)
	);
  gl_FragColor = vec4(color, 1.0);
}
`;

const fragmentShaderMobile = `
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform sampler2D u_texture;
#define PI_TWO			1.570796326794897
#define PI				3.141592653589793
#define TWO_PI			6.283185307179586
vec2 coord(in vec2 p) {
	p = p / u_resolution.xy;
	// correct aspect ratio
	if (u_resolution.x > u_resolution.y) {
		p.x *= u_resolution.x / u_resolution.y;
		p.x += (u_resolution.y - u_resolution.x) / u_resolution.y / 2.0;
	} else {
		p.y *= u_resolution.y / u_resolution.x;
		p.y += (u_resolution.x - u_resolution.y) / u_resolution.x / 2.0;
	}
	// centering
	p -= 0.5;
	p *= vec2(-0.5, 0.5);
	return p;
}
#define rx 1.0 / min(u_resolution.x, u_resolution.y)
#define uv gl_FragCoord.xy / u_resolution.xy
#define st coord(gl_FragCoord.xy)
#define mx coord(u_mouse)
void main() {
  // vec3 color = vec3(
  //   0.6798039216 * abs(cos(st.x + mx.x * st.x)),
  //   0.4935294118 * abs(cos(st.y + mx.y * st.y)),
  //   0.397254902 * abs(cos(st.y + mx.y * st.x))
  // );
  vec3 color = vec3(
		abs(cos(st.x * sin(u_time * 0.25)) * 0.8),
		abs(sin(st.y +  sin(u_time * 0.25)) * cos(u_time * 0.1) * 0.7),
		abs(sin(st.y +  sin(u_time * 0.25)) * cos(u_time * 0.2) * 0.7)
	);
  gl_FragColor = vec4(color, 1.0);
}
`;

export default Gradient
