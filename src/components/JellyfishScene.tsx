import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Jellyfish3D from './Jellyfish3D';

const JellyfishScene = () => {
  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        className="bg-gradient-to-b from-ocean-deep to-[#0f1f3d]"
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#0EA5E9" />
        
        <Jellyfish3D position={[0, 0, 0]} />
        
        <Jellyfish3D position={[-3, -1, -2]} />
        <Jellyfish3D position={[3, 1, -3]} />
        
        <Environment preset="night" />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          minDistance={5}
          maxDistance={15}
        />
        
        <fog attach="fog" args={['#0A1628', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default JellyfishScene;
