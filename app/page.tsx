'use client';

import Image from "next/image";
import MouseEffect from "@/components/MouseEffect";
//import Cube from "@/components/Cube";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-start min-h-screen px-6 bg-white text-black">
      <MouseEffect />

      {/* Navigation Links */}
      <nav className="sticky top-0 z-10 w-full max-w-2xl flex justify-start space-x-4 pt-3 pb-2 text-sm font-medium text-gray-500 bg-white">
        <a href="#education" className="hover:text-black transition">Education</a>
        <a href="#work" className="hover:text-black transition">Work Experience</a>
        <a href="#projects" className="hover:text-black transition">Projects</a>
        <a href="#fun" className="hover:text-black transition group"><span className="group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:via-yellow-500 group-hover:via-green-500 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent">Fun</span><span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"> 😮</span></a>
      </nav>

      {/* Header */}
      <div className="flex items-center space-x-6 py-10 max-w-2xl w-full">
        {/* Profile Image */}
        <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden">
          <Image
            src="EliWaldman_copy.png"
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
              
            </div>
          </div>

          <p className="text-gray-600 text-lg">ewaldman@cs.stanford.edu</p>

          <div className="flex items-center space-x-3 mt-1">
            <a
              href="https://www.linkedin.com/in/eli-waldman-8966421b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6 linkedin-icon"
              />
            </a>
            <a
              href="https://docs.google.com/document/d/1c087dcHENM_hW8Jk5sex44G9u7HlxmcYmL3OIdhj6x4/edit?usp=sharing"
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
        <p className="text-gray-600 mb-4">
          I&apos;m a storyteller, tinkerer, and computer scientist. I arrived at college with a camera in hand, eager to keep pursuing what I loved most: documentary filmmaking. My first computer science classes at Stanford showed me that code, data, design, and even math could uncover and express people’s stories in ways a camera never could. That realization led me from film to a B.S. in Symbolic Systems and ultimately to a Master&apos;s in Computer Science, where I developed deep technical skills, immersing myself in ML, algorithms, and human-centered AI research while also learning to convey complex technical concepts to both technical and non-technical audiences.
        </p>
        <p className="text-gray-600 mb-4">
          I currently work at Bayview Asset Management in NYC as a founding member of their Enterprise AI team. I work across the firm to uncover high-leverage use cases and develop and deliver internal AI solutions (hardware and software) that make trading, investing, and operations faster, clearer, and more reliable.
        </p>
        <p className="text-gray-600">
          My work centers on blending technical depth with business and design thinking: not just building tools with a clear, user-centered purpose, but creating technology that feels natural and impactful for the people who use it.
        </p>
        <hr className="w-full max-w-2xl border-t border-gray-300 my-2" />
      </section>
      
      

      {/* Education */}
      <section id="education" className="max-w-2xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <h3 className="text-xl font-bold text-black mb-1">Stanford University</h3>
        <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Master of Science, Computer Science</span> <span className="text-gray-500">(2024 - 2025)</span></p>
        <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Bachelor of Science, Symbolic Systems</span> <span className="text-gray-500">(2020 - 2024)</span></p>
        <hr className="w-full max-w-2xl border-t border-gray-300 my-2" />
      </section>

      {/* Work Experience */}
      <section id="work" className="max-w-2xl w-full mt-10">
        
      <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        {/* Bayview Asset Management */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Bayview Asset Management</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">AI Analyst</span> <span className="text-gray-500">(September 2025 - Present)</span> <span className="text-gray-500"> • New York City, NY</span></p>
          <p className="text-gray-600">Founding member of Bayview’s Enterprise AI team created in Summer 2025. Work across the entire commpany to identify high‑impact pain points and build internal AI solutions to streamline workflows and improve decision speed and quality. Develop and fine‑tune internal models for Bayview‑specific use cases, stand up the supporting infrastructure, and deliver end‑to‑end solutions: from problem discovery and prototype to production rollout.</p>
        </div>
        {/* Research Assistant */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Stanford Computer Science Department</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Research Assistant</span> <span className="text-gray-500">(April 2025 - June 2025)</span> <span className="text-gray-500"> • Stanford, CA</span></p>
          <p className="text-gray-600">Built Bayesian machine learning models using convolutional and variational inference techniques to analyze, reconstruct, and predict heartbeat signals with the goal of improving accuracy in estimating cardiovascular features (mainly blood pressure) from wrist/finger sensors to enable more precise, wearable sensors/monitors.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/EliWaldman/research"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              GitHub
            </a>
          </div>
          
          {/* Work Images */}
          <div className="flex flex-wrap mt-6">
            <div className="w-[500px]">
              <Image
                src="heart.png"
                alt="Heartbeat Signal Analysis"
                width={500}
                height={100}
                className="rounded-md object-contain w-full h-auto shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Course Assistant */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Stanford Computer Science Department</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Course Assistant</span> <span className="text-gray-500">(September 2024 - January 2025)</span> <span className="text-gray-500"> • Stanford, CA</span></p>
          <p className="text-gray-600">I guided the quarter-long app development project for each of my section groups. Assisted in the creation and refinement of assignments and exam questions and communicated group progress to Professor James Landay (co-director of Stanford&apos;s HAI Institute).</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://hci.stanford.edu/courses/cs147/2024/au/projects.html"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              my students&apos; projects
            </a>
          </div>
        </div>

        {/* L'Oréal */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">L&apos;Oréal</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Digital Product & Optimization Intern</span> <span className="text-gray-500">(June 2023 - August 2023)</span> <span className="text-gray-500"> • New York City, NY</span></p>
          <p className="text-gray-600">I developed the first proof-of-concept mobile shopping app and contributed to the creation of innovative eCommerce features for L&apos;Oréal Luxe, such as quick add-to-cart and video modules. I led the design and implementation of new digital tools projected to increase annual brand revenue by $6.5M and was selected to present to upper management and contribute to key technical and CRM decisions. Additionally, I revamped the team&apos;s A/B testing statistical calculator, improving its accuracy and driving an estimated $10M in additional annual revenue.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://drive.google.com/file/d/1ijL_jojNHfWWcgstwFYgREK89YFbc8rD/view?usp=sharing"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              early app demo
            </a>
          </div>
        </div>

        {/* Stanford Marketing & Consulting Group */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Stanford Marketing & Consulting Group</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Consultant</span> <span className="text-gray-500">(October 2021 - June 2022),</span> <span className="text-black font-medium">Project Manager</span> <span className="text-gray-500">(June 2022 - June 2023)</span> <span className="text-gray-500"> • Stanford, CA</span></p>
          <p className="text-gray-600">As Project Manager, I led and mentored over 50 student consultants, running weekly training sessions and managing client deliverables. I taught foundational skills in competitive analysis, consumer behavior, market research, and UX strategy. As a Consultant, I worked on projects for companies like Microsoft Xbox crafting go-to-market strategies for a new cloud gaming product and Firstcard Mastercard where I designed a student ambassador program and app features and pitched to the CEO.</p>
        </div>

        

        
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-2xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>

        


        {/* Project 1 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Predicting Nursing Home Admissions from Social Determinants of Health with ML</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Researcher,</span> Stanford Computer Science Department  <span className="text-gray-500">(Winter, 2024)</span></p>

          <p className="text-gray-600">Applied advanced ML models, including TabNet, XGBoost, and neural networks, to predict nursing home admissions using high-dimensional data from the Health and Retirement Study (HRS). Achieved state-of-the-art performance with TabNet (F1: 0.6285, AUC: 0.8905), outperforming traditional literature benchmarks. Tackled challenges such as class imbalance and categorical feature sparsity through model selection and optimization. Results highlight the potential of attention-based architectures for real-world healthcare prediction tasks.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://github.com/EliWaldman/CS229_Project"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1qoZcMfQJ8oFRD1qomw2mBpSbXswgJnoS/view?usp=sharing"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Paper
            </a>
          </div>
          
          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex-1 min-w-[30%]">
              <Image
                src="ml_confusion.png"
                alt="ML Confusion Matrix"
                width={800}
                height={500}
                className="rounded-md object-cover w-full shadow-sm"
              />
            </div>
            <div className="flex-1 min-w-[30%]">
              <Image
                src="ml_auc.png"
                alt="ML AUC Results"
                width={800}
                height={500}
                className="rounded-md object-cover w-full shadow-sm"
              />
            </div>
          </div>
        </div>



        {/* Project 2 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Reinforcement Learning: The Influence of Teacher Reliability on Finding Optimal Paths</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Researcher,</span> Stanford Computer Science Department  <span className="text-gray-500">(Spring, 2024)</span></p>
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
              href="https://drive.google.com/file/d/1NHs0FM2BGW_VmdtkQP0UlzA2ffCNrnqP/view?usp=sharing"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Paper
            </a>
          </div>
          
          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex-1 min-w-[48.5%]">
              <Image
                src="rl_graph.png"
                alt="RL Performance Graph"
                width={900}
                height={550}
                className="rounded-md object-cover w-full h-auto shadow-sm"
              />
            </div>
            <div className="flex-1 min-w-[49%]">
              <Image
                src="rl_maze.png"
                alt="RL Maze Environment"
                width={900}
                height={550}
                className="rounded-md object-cover w-full h-auto shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">daha</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Co-Founder, Designer, Developer,</span> <span className="text-gray-500">(September 2022 - September 2024)</span></p>

          <p className="text-gray-600">Created a peer-to-peer lending platform designed to make it easier for college students to borrow and share everyday items within their campus community. Built from the ground up, the idea for daha emerged from early user/needfinding interviews where we looked to uncover real pain points in student access to temporary-use items. We progressed through every stage of the design process, including paper prototyping, low and high (Figma) fidelity mockups, heuristic evaluations, usability testing, and dozens of user interviews.</p>
          <p className="text-gray-600 mt-3">The final app, built using React Native and Supabase, was designed to allow users to reach their network with a single post, streamlining the borrowing process and encouraging sustainable habits. We received the TomKat Energy Catalyst Grant from Stanford to support further development and launch the platform at Stanford and other universities.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://docs.google.com/document/d/1_qPWHnxo2ePEffVxj8ytdO5syXU3CLzxLB61XFxQEg8/edit?usp=sharing"
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
              href="https://drive.google.com/file/d/1gyfcvUx7uzwdBf9Q2VGwMLN8QqTV0ZWj/view?usp=sharing"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Demo Video 2
            </a>
          </div>
          
          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex-1 min-w-[10%]">
              <Image
                src="lowfi.png"
                alt="daha Low Fidelity Mockup"
                width={400}
                height={100}
                className="rounded-lg object-contain w-128 h-128"
                style={{ borderRadius: '8px' }}
              />
            </div>
            <div className="flex-1 min-w-[33%]">
              <Image
                src="hifi.png"
                alt="daha High Fidelity Mockup"
                width={800}
                height={500}
                className="rounded-lg object-contain w-128 h-128"
                style={{ borderRadius: '8px' }}
              />
            </div>
          </div>
        </div>

      </section>

      {/* Fun */}
      <section id="fun" className="max-w-2xl w-full mt-10">
        <h2 className="text-2xl font-semibold mb-2">Passion Projects</h2>
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">RunItBack</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Developer & Designer</span> <span className="text-gray-500">(April 2025 - June 2025)</span></p>
          <p className="text-gray-600">Designed and built a web platform to connect Stanford students interested in pick-up sports. Contributed to frontend and backend development for a web app that allowed users to create accounts with their Stanford email, RSVP to events, and engage in game-specific group chats. Developed personalized user profiles to track favorite sports, locations, and skill levels, fostering stronger in-person sports communities. Conducted user testing and iterative design based on engagement data, ultimately achieving strong user adoption of core features like RSVP and event creation, while implementing basic moderation tools in response to early community use patterns.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://run-it-back-dusky.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Try it out here
            </a>
            <a
              href="https://drive.google.com/file/d/1hMtI6J7dXohf-ZzMrkG75beADuYsAxiM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Demo Video
            </a>
          </div>
        </div>

        {/* Outdoor Deck */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Outdoor Deck</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Builder & Designer</span> <span className="text-gray-500">(Spring 2024)</span></p>
          <p className="text-gray-600">Designed and constructed an outdoor deck for my dorm, featuring an integrated sand pit. This project involved precise woodworking and structural planning to create a functional and aesthetically pleasing communal space. </p>
          
          {/* Project Image */}
          <div className="mt-6">
            <Image
                              src="outdoor-deck.jpeg"
              alt="Outdoor deck with sand pit"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-auto"
              style={{ borderRadius: '8px' }}
            />
            <p className="text-sm text-gray-500 mt-2 italic">Work in progress photo</p>
          </div>
        </div>

        {/* Bay to Breakers Float */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Bay to Breakers Float</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Builder & Designer</span> <span className="text-gray-500">(Spring 2024)</span></p>
          <p className="text-gray-600">Designed and built a Fortnite-inspired float for Stanford&apos;s annual involvement in the Bay to Breakers SF race. This project involved 50+ hours of creative design planning and hands-on construction.</p>
          
          {/* Project Images */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="w-full">
              <Image
                src="bay-to-breakers-1.jpeg"
                alt="Bay to Breakers Float - Image 1"
                width={600}
                height={400}
                className="rounded-lg object-contain w-full h-auto"
                style={{ borderRadius: '8px' }}
              />
              <p className="text-sm text-gray-500 mt-2 italic">Digital design</p>
            </div>
            <div className="w-full">
              <Image
                src="bay-to-breakers-2.jpeg"
                alt="Bay to Breakers Float - Image 2"
                width={600}
                height={400}
                className="rounded-lg object-contain w-full h-auto"
                style={{ borderRadius: '8px' }}
              />
              <p className="text-sm text-gray-500 mt-2 italic">Physical frame</p>
            </div>
            <div className="w-full">
              <Image
                src="bay-to-breakers-3.jpeg"
                alt="Bay to Breakers Float - Image 3"
                width={600}
                height={400}
                className="rounded-lg object-contain w-full h-auto"
                style={{ borderRadius: '8px' }}
              />
              <p className="text-sm text-gray-500 mt-2 italic">Hard shell and paint</p>
            </div>
            <div className="w-full">
              <Image
                src="bay-to-breakers-4.jpeg"
                alt="Bay to Breakers Float - Image 4"
                width={600}
                height={400}
                className="rounded-lg object-contain w-full h-auto"
                style={{ borderRadius: '8px' }}
              />
              <p className="text-sm text-gray-500 mt-2 italic">Enjoying the race!</p>
            </div>
          </div>
        </div>

        {/* Spiritwood */}
        <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-100">
          <h3 className="text-xl font-bold text-black mb-1">Spiritwood</h3>
          <p className="text-gray-600 mb-2"> <span className="text-black font-medium">Designer and Engineer</span> <span className="text-gray-500">(2023)</span></p>
          <p className="text-gray-600">Designed and engineered an adventure game set in an enchanted forest where players navigate a world of corrupted animals and mystical powers. Created level design with interconnected forest environments, designed character mechanics, and implemented core gameplay systems, including puzzle-solving elements.</p>
          <div className="flex space-x-3 mt-4">
            <a
              href="https://drubanight.itch.io/spiritwood"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Click here to play
            </a>
          </div>
          
          {/* Project Image */}
          <div className="mt-6">
            <Image
              src="spiritwood-gameplay.png"
              alt="Spiritwood gameplay screenshot"
              width={600}
              height={400}
              className="rounded-lg object-contain w-full h-auto"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}


