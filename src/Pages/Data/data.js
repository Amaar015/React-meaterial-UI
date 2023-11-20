import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import WebIcon from '@mui/icons-material/Web';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { MobileOffRounded } from '@mui/icons-material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
export default{
     name:"Hassnain Raza",
    title: "Logo Designer",
    icons:<PersonIcon/>, 
    birthday:"21-March-2002",
    email:"abc@gmail.com",
    address:"xyz pakistan",
    phone:"03304035567",

    social:{
        facbook:{
            link:"www.facebook.com",
             text:"Amaar Hussnain",
             icon:<FacebookIcon/>
        },
        linkedin:{
            link:"www.linkedin.com",
             text:"Amaar Raza",
             icon:<LinkedInIcon/>
        },
        twiter:{
            link:"www.twiter.com",
             text:"Amaar015",
             icon:<TwitterIcon/>
        },
        instagram:{
            link:"www.instagram.com",
             text:"Amaar027",
             icon:<InstagramIcon/>
        }
    },

    about:"Hello, I'm Amaar Hassnain, a seasoned and versatile Web Developer dedicated to transforming creative concepts into robust, user-friendly digital experiences. With a solid foundation in both front-end and back-end development, I have honed my skills over the years to deliver innovative and effective solutions for a diverse range of clients.\n\n My journey in web development began with a passion for crafting visually appealing and functional websites. I have successfully translated this passion into a comprehensive skill set that includes expertise in HTML, CSS, JavaScript, and various web development frameworks. From responsive design to seamless user interactions, I thrive on creating websites that not only meet client objectives but also exceed user expectations.",

    experience:[
        {
            title:"Work 1",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        },
        {
            title:"Work 2",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        },
        {
            title:"Work 3",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        }
    ],
    education:[
        {
            title:"School 1",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        },
        {
            title:"School 2",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        },
        {
            title:"School 3",
            date:"2018-present",
            description:"I am a recent graduate with a degree in Software Engineering, equipped with a solid foundation in computer science and a passion for developing innovative software solutions."

        }
    ],

    services:[
        {
            title:"Web Dev",
            description:"I have a been adadass web developer for 10 years",
            icon:<WebIcon/>

        },
        {
            title:"Branding Identity",
            description:"I have a been adadass web developer for 10 years",
            icon:<AssignmentOutlinedIcon/>

        },
        {
            title:"Web Design",
            description:"I have a been adadass web developer for 10 years",
            icon:<MobileOffRounded/>
        }
    ],
    skills:[
        {
            title:"Front-End",
            description:[
                "ReactJs",
                "JavaScript",
                "TypeScript",
                 "Bootstrap",
                 "Material UI"
            ],
        },
        {
            title:"Back-End",
            description:["NodeJs","Java","Python","Solidity"],
        },
        {
            title:"Database",
            description:["Firebase","MS SQL Server","MySQL","MongoDB"],
        },
        {
            title:"Source Control",
            description:["Git","GitHub","Agile","Cloud"],
        }

    ],
     
    portfolio:[
        {
            tag:"React",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creative-tim.com%2Fblog%2Fweb-development%2Fbest-reactjs-project-examples%2F&psig=AOvVaw3VkC5v8q7WRpnm6RJsRwzy&ust=1700557817574000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjV_Zvd0IIDFQAAAAAdAAAAABAE",
            title:"React Project 1",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
        {
            tag:"React",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.creative-tim.com%2Fblog%2Fweb-development%2Fbest-reactjs-project-examples%2F&psig=AOvVaw3VkC5v8q7WRpnm6RJsRwzy&ust=1700557817574000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjV_Zvd0IIDFQAAAAAdAAAAABAR",
            title:"React Project 2",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
        {
            tag:"React",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fthemobilereality.com%2Fblog%2Freact-ui-component-frameworks&psig=AOvVaw3VkC5v8q7WRpnm6RJsRwzy&ust=1700557817574000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjV_Zvd0IIDFQAAAAAdAAAAABAZ",
            title:"React Project 3",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
        {
            tag:"Python",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fanvil.works%2Farticles%2Fpython-gui-builder-web&psig=AOvVaw2MGm6uvVGC1N4roGodb7Pt&ust=1700559577086000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjRl-Pj0IIDFQAAAAAdAAAAABAE",
            title:"React Project 1",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
        {
            tag:"Python",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fexternlabs.com%2Fblogs%2Fhow-to-develop-python-mobile-app%2F&psig=AOvVaw2MGm6uvVGC1N4roGodb7Pt&ust=1700559577086000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjRl-Pj0IIDFQAAAAAdAAAAABAR",
            title:"React Project 2",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
        {
            tag:"Java",
            Image:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Fedureka%2Fjava-projects-db51097281e3&psig=AOvVaw0laAeg6IRKwRfKATh21QQj&ust=1700559660549000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiR_Yrk0IIDFQAAAAAdAAAAABAE",
            title:"React Project 1",
            description:"This is the react project and Material Ui designed",
            links:[
                {link:"https://www.google.com",icon:<YouTubeIcon/>},
                {link:"https://www.google.com",icon:<GitHubIcon/>},
                {link:"https://www.google.com",icon:<LanguageIcon/>},
            ]
        },
    ]

}