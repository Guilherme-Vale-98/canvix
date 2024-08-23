import { Injectable } from '@angular/core';
import { Project } from './project.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      imgUrl: "assets/web ui design.png",
      title: "Web UI Design",
      subtitle: "Creative UI Design",
      category: "Web Development",
      client: "Tech Innovations",
      date: "July 2023",
      location: "123 Tech Lane, Silicon Valley",
      description: {
        challenge: "Tech Innovations faced a significant challenge with their outdated web interface, which was not only visually unappealing but also lacked responsiveness on various devices. Users reported frustration with the navigation and overall user experience, leading to higher bounce rates and a decrease in user retention. The company recognized the need to revamp their UI to stay competitive and to provide a seamless experience for their growing user base, which includes a diverse demographic with varying technological expertise.",
        solution: "To address these issues, we embarked on a complete redesign of the UI, focusing on creating a modern, aesthetically pleasing interface that was both intuitive and accessible. We employed the latest in web design principles, including responsive design techniques, to ensure that the interface was optimized for all screen sizes, from mobile devices to large desktop monitors. The design process was highly collaborative, involving regular feedback sessions with the Tech Innovations team to align the UI with their brand identity and user expectations.",
        result: "The launch of the new UI was met with overwhelmingly positive feedback from users, who appreciated the improved navigation and visually appealing design. The changes led to a 30% increase in user engagement, as well as a notable reduction in bounce rates. Furthermore, the responsive design ensured that the interface performed consistently across all devices, contributing to an overall enhancement in user satisfaction. Tech Innovations not only retained their existing user base but also attracted new users, leading to a significant growth in their platform's popularity."
      }
    },
    {
      imgUrl: "assets/digital strategy.png",
      title: "Designing Digital Strategy",
      subtitle: "Social Media Marketing",
      category: "Cloud Solution",
      client: "BrightMedia Solutions",
      date: "January 2023",
      location: "489 Depot Road, Midland",
      description: {
        challenge: "BrightMedia Solutions was at a critical juncture in their growth, as they sought to expand their digital footprint and enhance their brand visibility in a saturated market. Despite having a solid product offering, the company struggled with low engagement on social media, limited brand awareness, and an inconsistent online presence. Their existing digital strategy was outdated and failed to leverage the latest trends in social media marketing and cloud solutions, which are essential for reaching a broader audience in today's digital landscape.",
        solution: "In response to these challenges, we developed a comprehensive digital strategy that integrated cutting-edge social media marketing techniques with robust cloud-based solutions. The strategy included a detailed analysis of BrightMedia's target audience and competitors, which informed the creation of a tailored content plan designed to maximize engagement. We also streamlined their online branding across all platforms, ensuring consistency in messaging and visual identity. Additionally, we implemented advanced analytics tools to monitor performance and make data-driven adjustments to the strategy in real-time.",
        result: "The implementation of the new digital strategy resulted in a dramatic transformation for BrightMedia Solutions. Their social media following grew by 50%, with a corresponding increase in engagement metrics such as likes, shares, and comments. The consistent branding and targeted content led to higher brand recognition and credibility within their industry. Moreover, the use of cloud-based tools enabled more efficient management of their digital assets and campaigns, reducing overhead and increasing their marketing ROI. As a result, BrightMedia Solutions was able to achieve a stronger market position and set the stage for continued growth."
      }
    },
    {
      imgUrl: "assets/UI design 2.png",
      title: "UI Design",
      subtitle: "Social Media Marketing",
      category: "Graphic Design",
      client: "Creative Minds Agency",
      date: "June 2023",
      location: "78 Design Blvd, New York",
      description: {
        challenge: "Creative Minds Agency, known for its innovative approach to branding, faced a challenge when their existing UI design began to feel outdated and out of sync with their cutting-edge reputation. The company had received feedback from clients that the user interface did not adequately reflect the creativity and modernity of the agency's work, leading to potential misalignment in client perceptions. The agency needed a UI design that could showcase their artistic vision while remaining functional and user-friendly, ensuring that their digital presence matched their high standards of creativity.",
        solution: "To solve this problem, we embarked on a project to create a UI design that was as innovative and visually striking as the agency itself. The design process involved extensive research into the latest trends in graphic design and user interface development, as well as close collaboration with the agency's creative team to capture their unique style. The new UI incorporated bold color schemes, dynamic animations, and a streamlined navigation system, all designed to create an immersive experience for users. Special attention was paid to the balance between creativity and usability, ensuring that the design was both eye-catching and practical.",
        result: "The new UI design was a resounding success, receiving praise from both clients and industry peers. It not only revitalized the agency's digital presence but also reinforced their reputation as a leader in innovative design. Clients reported a more engaging experience, which translated into increased inquiries and a higher conversion rate. The agency's website traffic also saw a significant boost, as the new design attracted more visitors and encouraged them to explore the site in greater depth. Overall, the project helped Creative Minds Agency strengthen their brand and achieve their business goals."
      }
    },
    {
      imgUrl: "assets/UI design.png",
      title: "UI Design",
      subtitle: "Social Media Marketing",
      category: "Brand Strategy",
      client: "BrandBoost",
      date: "September 2024",
      location: "56 Brand Ave, Los Angeles",
      description: {
        challenge: "BrandBoost, a rapidly growing company in the branding industry, faced the challenge of differentiating themselves in a highly competitive market. Their existing user interface, while functional, lacked the innovation and visual impact needed to stand out. Clients and potential partners were starting to perceive the company as falling behind in terms of digital trends, which was at odds with their mission to be at the forefront of brand strategy. To maintain their competitive edge, BrandBoost needed a UI design that not only captured their dynamic brand but also provided a strategic advantage by enhancing user engagement and driving business outcomes.",
        solution: "We approached this challenge by designing a UI that was both visually striking and strategically sound. The design process was informed by a deep understanding of BrandBoost's brand values and business objectives, ensuring that every element of the UI reinforced their market position. The new interface featured innovative design elements, including interactive components and adaptive layouts, that created a more personalized experience for users. We also integrated advanced analytics tools to track user interactions, providing BrandBoost with valuable insights to continually optimize their digital strategy.",
        result: "The redesigned UI delivered significant results for BrandBoost, helping them to regain their competitive edge. The fresh, modern design attracted positive attention from clients and industry leaders alike, leading to an increase in high-profile partnerships and client acquisitions. User engagement metrics improved across the board, with longer session durations and higher interaction rates. The strategic integration of analytics also empowered BrandBoost to make data-driven decisions, further enhancing the effectiveness of their digital strategy. In the end, the project not only elevated BrandBoost's digital presence but also positioned them as a trailblazer in the branding industry."
      }
    },
    {
      imgUrl: "assets/digital strategy.png",
      title: "Corporate Website Revamp",
      subtitle: "Brand Identity Refresh",
      category: "Corporate Branding",
      client: "GlobalCorp Ltd.",
      date: "October 2023",
      location: "7 Business Park, Chicago",
      description: {
        challenge: "GlobalCorp Ltd., a multinational corporation, recognized that their corporate website was no longer reflective of their innovative and forward-thinking brand identity. The outdated design and inconsistent messaging were failing to engage stakeholders, including investors, partners, and potential clients. As a company that prides itself on leading in technology and innovation, GlobalCorp needed a website that could effectively communicate their brand values and support their business objectives in a digital-first world.",
        solution: "We undertook a full-scale revamp of GlobalCorp's corporate website, with a focus on modernizing the design and ensuring consistency in brand messaging across all pages. The new design was clean, professional, and aligned with GlobalCorp's brand guidelines, featuring a responsive layout that provided an optimal viewing experience on any device. We also revamped the content strategy, creating compelling copy and multimedia elements that resonated with their diverse audience. Interactive features, such as a virtual tour of their facilities and an investor relations portal, were integrated to enhance user engagement.",
        result: "The launch of the revamped corporate website was a resounding success, achieving GlobalCorp's goal of strengthening their digital presence. The updated design and consistent messaging helped to reinforce GlobalCorp's position as a leader in their industry, garnering positive feedback from stakeholders. The interactive features led to increased user engagement, with more visitors exploring the site and spending more time on key pages. Additionally, the refreshed brand identity attracted new business opportunities and partnerships, further supporting GlobalCorp's strategic objectives."
      }},
      {
        imgUrl: "assets/web ui design.png",
        title: "E-commerce Platform Redesign",
        subtitle: "User Experience Enhancement",
        category: "E-commerce Development",
        client: "ShopEase Inc.",
        date: "May 2024",
        location: "12 Commerce Street, New York",
        description: {
          challenge: "ShopEase Inc., a leading player in the e-commerce industry, faced a significant challenge with their aging platform. The site was becoming increasingly difficult to navigate, especially as the product catalog grew. Customers reported a frustrating shopping experience due to slow load times, complicated checkout processes, and a lack of mobile optimization. As the competition in the e-commerce space intensified, ShopEase realized that a complete overhaul of their platform was necessary to meet customer expectations and maintain their market leadership.",
          solution: "We initiated a comprehensive redesign of the ShopEase platform, focusing on enhancing user experience across all touchpoints. This involved rethinking the entire site architecture, simplifying navigation, and optimizing the site for speed and mobile use. We also streamlined the checkout process, reducing it to just a few steps to minimize cart abandonment. Advanced search functionalities and personalized recommendations were integrated to improve product discovery and customer satisfaction. Throughout the project, we maintained close communication with ShopEase's internal teams to ensure that the new platform aligned with their business goals.",
          result: "The redesigned e-commerce platform launched successfully, receiving immediate positive feedback from users. Load times were significantly reduced, and the simplified navigation made it easier for customers to find and purchase products. Mobile optimization proved particularly impactful, as mobile transactions increased by 40%. The streamlined checkout process resulted in a 25% reduction in cart abandonment, leading to higher conversion rates. ShopEase Inc. not only retained their existing customer base but also attracted new customers, solidifying their position as a leader in the e-commerce industry."
        }
      }
  ];

  private getMonthIndex(month: string): number {
    return new Date(Date.parse(month + " 1, 2023")).getMonth();
  }

  getProjects(): Project[] {
    return this.projects.sort((a, b) => {
      const [monthA, yearA] = a.date.split(" ");
      const [monthB, yearB] = b.date.split(" ");
  
      const dateA = new Date(parseInt(yearA), this.getMonthIndex(monthA));
      const dateB = new Date(parseInt(yearB), this.getMonthIndex(monthB));
  
      return dateB.getTime() - dateA.getTime();
    });
  }

  getProjectByTitle(title: string): Project {
    const project = this.projects.find(project => project.title === title);
    if (!project) {
      throw new Error(`Project with title "${title}" not found.`);
    }
    return project;
  }


}
