import Image from 'next/image'
import React from 'react'
import projectsBanner from './../assets/projectsBanner.jpg'
import project1 from './../assets/propertyServicesImg.jpg'
import project4 from './../assets/hard_services.jpg'
import project6 from './../assets/historyBanner.jpg'
import project5 from './../assets/companyProfile3.jpg'
import project9 from './../assets/gallery5.jpg'
import project3 from './../assets/social_1_1.jpg'
import project8 from './../assets/management_services.jpg'
import project2 from './../assets/social_2_2.jpg'
import project7 from './../assets/social_2_1.jpg'
import ServiceCard from './../components/ServiceCard'
import Head from 'next/head'
import MainTitle from '../components/MainTitle'


const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects - Boualvard</title>
      </Head>
      <div className="w-full">
        <Image src={projectsBanner} height={1400} />
      </div>
      <div
        className="mx-12 lg:mx-28 flex flex-col md:space-y-5"
        style={{ fontFamily: 'Space Grotesk' }}
      >
        <MainTitle title="Our Projects" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-y-10 gap-x-10 pt-4">
          {[
            projectObj1,
            projectObj2,
            projectObj3,
            projectObj4,
            projectObj5,
            projectObj6,
            projectObj7,
            projectObj8,
            projectObj9,
          ].map((project, i) => (
            <ServiceCard
              title={project.title}
              content={project.description}
              img={project.projectImg}
              key={i+1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects

const projectObj1 = {
    title: "Convallis adipiscing eu ligula.",
    description: "Enim adipiscing non elementum risus platea sed nisl aliquet. Pharetra euismod at a nibh.",
    projectImg: project1,
}
const projectObj2 = {
    title: "Id lectus adipiscing id.",
    description: "Cursus egestas tristique aliquam morbi. Pharetra enim in purus quis enim mi.",
    projectImg: project2,
}
const projectObj3 = {
    title: "Ac gravida nibh cursus semper.",
    description: "Malesuada nunc ac nec non pellentesque non dui. Amet id lorem sed feugiat in viverra.",
    projectImg: project3,
}
const projectObj4 = {
    title: "Ultrices etiam mauris.",
    description: "Egestas integer elementum interdum enim nibh quam. Posuere pellentesque pharetra.",
    projectImg: project4,
}
const projectObj5 = {
    title: "Turpis etiam id facilisis vitae. ",
    description: "A tortor senectus augue mauris, dolor quis sed nunc viverra. Laoreet nisl integer urna.",
    projectImg: project5,
}
const projectObj6 = {
    title: "Nec pretium ac risus vitae eu.",
    description: "Augue massa ornare risus pretium cursus donec consequat gravida quis. Hendrerit ut.",
    projectImg: project6,
}
const projectObj7 = {
    title: "Blandit mauris vel sem pulvinar.",
    description: "Sit aliquam tellus sit tortor amet sit. Pharetra faucibus sit vitae eget duis varius vitae.",
    projectImg: project7,
}
const projectObj8 = {
    title: "Enim pulvinar ac cursus in.",
    description: "Id viverra senectus ultrices scelerisque augue. Urna commodo nisi venenatis.",
    projectImg: project8,
}
const projectObj9 = {
    title: "Egestas sit quis est gravida in. ",
    description: "Morbi ut in elit tincidunt. Phasellus orci eget volutpat tristique scelerisque nec urna.",
    projectImg: project9,
}