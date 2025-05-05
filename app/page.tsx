'use client';

import Image from "next/image";
import MouseEffect from "@/components/MouseEffect";
import Cube from "@/components/Cube";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen px-6 bg-white text-black">
      <MouseEffect />

      {/* Navigation Links */}
      <nav className=" w-full max-w-2xl flex justify-start space-x-4 pt-6 text-sm font-medium text-gray-500">
        <a href="#education" className="hover:text-black transition">Education</a>
        <a href="#work" className="hover:text-black transition">Work Experience</a>
        <a href="#projects" className="hover:text-black transition">Projects</a>
      </nav>

      {/* Header */}
      <div className="flex items-center space-x-6 py-10 max-w-2xl w-full">
        {/* Profile Image */}
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden">
          <Image
            src="/EliWaldman_copy.png"
            alt="Eli Waldman"
            width={250}
            height={250}
            className="object-cover scale-170"
            quality={100}
            priority
            style={{
              transform: 'translate(3%, 7%)',
            }}
          />
        </div>

        {/* Text and Cube */}
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold">Eli Waldman</h1>
            <div className="w-12 h-12 overflow-hidden flex items-center justify-center">
              <Cube />
            </div>
          </div>

          <p className="text-gray-600 text-lg">ewaldman@stanford.edu</p>

          <div className="flex items-center space-x-3 mt-1">
            <a
              href="https://www.linkedin.com/in/eli-waldman-8966421b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="linkedin.svg"
                alt="LinkedIn"
                className="w-6 h-6 linkedin-icon"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1Ug6KwMHQxt9dU3AR3UgFRGsKKq7laOFqeOO_7klpIU8/edit?usp=sharing"
              target="_blank"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* About Me */}
      <section className="max-w-2xl w-full text-left">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600">
          I’m graduating from Stanford with an M.S. in Computer Science and a B.S. in Symbolic Systems. My interests lie in designing and engineering technical solutions that address real-world challenges and seamlessly integrate with user needs. I thrive in collaborative environments and enjoy exploring fields ranging from full stack app development and machine/reinforcement learning to assembly-level OS design.
        </p>
        <hr className="w-full max-w-2xl border-t border-gray-300 my-2" />

      </section>
      
      

      {/* Education */}
      <section id="education" className="max-w-2xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p className="font-semibold">Stanford University</p>
        <p className="text-gray-600">Master of Science, Computer Science (2024 - 2025)</p>
        <p className="text-gray-600">Bachelor of Science, Symbolic Systems (2020 - 2024)</p>
        <hr className="w-full max-w-2xl border-t border-gray-300 my-2" />

      </section>

      {/* Work Experience */}
      <section id="work" className="max-w-2xl w-full mt-10">
        
      <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <p className="font-semibold">Stanford Computer Science Department</p>
        <p className="text-gray-600 mb-1"> <span className="text-black font-semibold">Research Assistant</span> (April 2025 - June 2025)</p>
        <p className="text-gray-600">Built Bayesian machine learning models using convolutional and variational inference techniques to analyze, reconstruct, and predict heartbeat signals with the goal of improving accuracy in estimating cardiovascular features (mainly blood pressure) from wrist/finger sensors to enable more precise, wearable sensors/monitors.</p>
        <div className="flex space-x-3 mt-2">
            <a
              href="https://github.com/EliWaldman/research"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Github
            </a>
        </div>
                 {/* Top Two Side-by-Side Images */}
  <div className="flex flex-wrap">
    <div className="w-[500px]">
      <Image
        src="/heart.png" // replace with your file
        alt="Project screenshot 1"
        width={500}
        height={100}
        className="rounded-md object-contain w-full h-auto"
      />
    </div>
  </div>


        <p className="font-semibold mt-5">Stanford Computer Science Department</p>
        <p className="text-gray-600 mb-1"> <span className="text-black font-semibold">Course Assistant</span> (September 2024 - January 2025)</p>
        <p className="text-gray-600">I guided the quarter-long app development project for each of my section groups. Assisted in the creation and refinement of assignments and exam questions and communicated group progress to Professor James Landay (co-director of Stanford’s HAI Institute).</p>
        <div className="flex space-x-3 mt-2">
            <a
              href="https://hci.stanford.edu/courses/cs147/2024/au/projects.html"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              my students' projects
            </a>
        </div>
        

        <p className="font-semibold mt-6">L'Oréal</p>
        <p className="text-gray-600 mb-1"> <span className="text-black font-semibold">Digital Product & Optimization Intern</span> (June 2023 - August 2023)</p>
        <p className="text-gray-600">I developed the first proof-of-concept mobile shopping app and contributed to the creation of innovative eCommerce features for L’Oréal Luxe, such as quick add-to-cart and video modules. I led the design and implementation of new digital tools projected to increase annual brand revenue by $6.5M and was selected to present to upper management and contribute to key technical and CRM decisions. Additionally, I revamped the team's A/B testing statistical calculator, improving its accuracy and driving an estimated $10M in additional annual revenue.</p>
        <div className="flex space-x-3 mt-2">
            <a
              href="https://drive.google.com/file/d/1fhhtro-6a1_q06-NEZvRg6d70m2Hml0k/view?usp=sharing"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              early app demo
            </a>
        </div>

        <p className="font-semibold mt-6">Stanford Marketing & Consulting Group</p>
        <p className="text-gray-600 mb-1"> <span className="text-black font-semibold">Consultant</span> (October 2021 - June 2022), <span className="text-black font-semibold">Project Manager</span> (June 2022 - June 2023)</p>
        <p className="text-gray-600">As Project Manager, I led and mentored over 50 student consultants, running weekly training sessions and managing client deliverables. I taught foundational skills in competitive analysis, consumer behavior, market research, and UX strategy. As a Consultant, I worked on projects for companies like Microsoft Xbox crafting go-to-market strategies for a new cloud gaming product and Firstcard Mastercard where I designed a student ambassador program and app features and pitched to the CEO.</p>
        <hr className="w-full max-w-2xl border-t border-gray-300 my-2" />

        

        
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-2xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>

        


        {/* Project 1 */}
        <div className="mb-6">
          <p className="text-gray-600"> <span className="text-black font-semibold">Predicting Nursing Home Admissions from Social Determinants of Health with ML</span></p>
          <p className="text-gray-600 mb-2"> <span className="text-black font-semibold">Researcher,</span> Stanford Computer Science Department  (Winter, 2024)</p>

          <p className="text-gray-600">Applied advanced ML models, including TabNet, XGBoost, and neural networks, to predict nursing home admissions using high-dimensional data from the Health and Retirement Study (HRS). Achieved state-of-the-art performance with TabNet (F1: 0.6285, AUC: 0.8905), outperforming traditional literature benchmarks. Tackled challenges such as class imbalance and categorical feature sparsity through model selection and optimization. Results highlight the potential of attention-based architectures for real-world healthcare prediction tasks.</p>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://github.com/EliWaldman/CS229_Project"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/17eohDb2vwRljsubjeVDefHojeq0umTtW/view"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Paper
            </a>
          </div>
        </div>  
            
            {/* Top Two Side-by-Side Images */}
  <div className="flex flex-wrap gap-4 mt-6 mb-6">
    <div className="flex-1 min-w-[30%]">
      <Image
        src="/ml_confusion.png" // replace with your file
        alt="Project screenshot 1"
        width={800}
        height={500}
        className="rounded-md object-cover w-full"
      />
    </div>
    <div className="flex-1 min-w-[30%]">
      <Image
        src="/ml_auc.png"
        alt="Project screenshot 2"
        width={800}
        height={500}
        className="rounded-md object-cover w-full"
      />
    </div>
  </div>



        {/* Project 2 */}

{/* Project 2 */}
<div className="mb-6">
  <p className="text-gray-600"> <span className="text-black font-semibold">Reinforcement Learning: The Influence of Teacher Reliability on Finding Optimal Paths</span></p>
  <p className="text-gray-600"> <span className="text-black font-semibold">Researcher,</span> Stanford Computer Science Department  (Spring, 2024)</p>
  <p className="text-gray-600 mt-2">Studied how the timing and reliability of parental guidance affect learning in student-teacher reinforcement learning agents. Trained an optimal parent agent and then varied its reliability from 0% to 100% by adjusting its policy. Child agents were trained under pre-advice (seeks help only when uncertain) and post-advice (constantly influenced by the parent) strategies. Found that pre-advice agents were more resilient to poor guidance and learned optimal policies more efficiently, while post-advice agents were more vulnerable to unreliable input. Results emphasize the importance of selective guidance and balanced exploration in effective learning for AI agents and humans.</p>

    {/* Buttons */}
    <div className="flex space-x-3 mt-4">
    <a
      href="https://github.com/samkwok1/Student-Teacher-RL"
      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
    >
      GitHub
    </a>
    <a
      href="https://drive.google.com/file/d/1Ctb-94EcnNC-1FWmn2lF0ZVtDCSVgpzB/view"
      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
    >
      Paper
    </a>
  </div>
  {/* Top Two Side-by-Side Images */}
  <div className="flex flex-wrap gap-4 mt-6 mb-6">
    <div className="flex-1 min-w-[48.5%]">
      <Image
        src="/rl_graph.png" // replace with your file
        alt="Project screenshot 1"
        width={900}
        height={550}
        className="rounded-md object-cover w-full h-auto"
      />
    </div>
    <div className="flex-1 min-w-[49%]">
      <Image
        src="/rl_maze.png"
        alt="Project screenshot 2"
        width={900}
        height={550}
        className="rounded-md object-cover w-full h-auto"
      />
    </div>
  </div>


</div>

        {/* Project 3 */}
        <div className="mb-6">
          <p className="text-gray-600"> <span className="text-black font-semibold">daha</span></p>
          <p className="text-gray-600 mb-2"> <span className="text-black font-semibold">Co-Founder, Designer, Developer,</span> (September 2022 - September 2024)</p>

          <p className="text-gray-600">Created a peer-to-peer lending platform designed to make it easier for college students to borrow and share everyday items within their campus community. Built from the ground up, the idea for daha emerged from early user/needfinding interviews where we looked to uncover real pain points in student access to temporary-use items. We progressed through every stage of the design process, including paper prototyping, low and high (Figma) fidelity mockups, heuristic evaluations, usability testing, and dozens of user interviews.</p>
          <p className="text-gray-600 mt-3">The final app, built using React Native and Supabase, was designed to allow users to reach their network with a single post, streamlining the borrowing process and encouraging sustainable habits. We received the TomKat Energy Catalyst Grant from Stanford to support further development and launch the platform at Stanford and other universities.</p>
          <div className="flex space-x-3 mt-2">
            <a
              href="https://docs.google.com/document/d/1JWmXln983iYPZgzQ_IYvtJGmzZGRTRt-FPS-iKJXpSs/edit?tab=t.0"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Documentation
            </a>
            <a
              href="https://www.youtube.com/watch?v=Lze8IVCYgMc"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Demo Video 1
            </a>
            <a
              href="https://drive.google.com/file/d/1z-HHp-GYcpZn0zhoNtUUfdNEw4gsaZ0a/view"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Demo Video 2
            </a>
          </div>
        </div>  
            
            {/* Top Two Side-by-Side Images */}
  <div className="flex flex-wrap gap-4 mt-6 mb-6">
    <div className="flex-1 min-w-[10%]">
      <Image
        src="/lowfi.png" // replace with your file
        alt="Project screenshot 1"
        width={400}
        height={100}
        className="rounded-md object-contain w-128 h-128"
      />
    </div>
    <div className="flex-1 min-w-[33%]">
      <Image
        src="/hifi.png"
        alt="Project screenshot 2"
        width={800}
        height={500}
        className="rounded-md object-contain w-128 h-128"
      />
    </div>
  </div>

      </section>
    </main>
  );
}


