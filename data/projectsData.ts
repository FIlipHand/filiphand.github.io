interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Poorly Optimized Language Model',
    description: `Institute of Poorly Optimized GPU Code presents its first creation: "Poorly Optimized Language mode". 
    As a first victim of research we've chosen Qwen3 models. Repository will showcase progress of building model using PyTorch
    and then optimizing its inference with methods like KV-caching, Speculative decoding and so on. After sufficient progress blog
    post will be created showcasing what was achieved.`,
    imgSrc: '/static/images/qwen3_logo.png',
    href: 'https://github.com/FIlipHand/model_inference',
  },
]

export default projectsData
