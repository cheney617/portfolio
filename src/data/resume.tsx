import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Xin Chen",
  initials: "XC",
  url: "https://xinchen.co",
  location: "Shanghai / Sydney",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "9年C端产品 · 从单点业务到完整商业链路负责人 · 深度实践AI×产品",
  summary:
    "9年C端产品经验，从单点用户交互/转化产品成长为完整商业链路负责人。在TikTok LIVE主导直播订阅会员的支付转化能力搭建，以及留资商业化工具的建设，跨6+团队协调推动复杂项目落地；在携程从0搭建千万级付费会员体系，5年5次晋升。具备将AI能力产品化的实践经验——主导AI模型在用户转化场景的落地（私信转化+35%），同时将AI系统性融入PM工作流（数据监控/PRD生成/Case Review）。获TikTok LIVE 2026 Hackathon冠军，海外全英文办公3年。",
  avatarUrl: "/me.png",
  skills: [
    { name: "商业策略", icon: (_props: any) => null },
    { name: "从0到1", icon: (_props: any) => null },
    { name: "增长", icon: (_props: any) => null },
    { name: "支付基建", icon: (_props: any) => null },
    { name: "AI产品", icon: (_props: any) => null },
    { name: "数据驱动", icon: (_props: any) => null },
    { name: "团队管理", icon: (_props: any) => null },
    { name: "全英文办公", icon: (_props: any) => null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "chenxin.2517@gmail.com",
    tel: "+86 13585770265",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/cheney617",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "/resume.pdf",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "字节跳动 · TikTok LIVE",
      href: "https://www.tiktok.com",
      badges: [],
      location: "Sydney, Australia",
      title: "产品经理",
      logoUrl: "/tiktok-logo_1080029-103.avif",
      start: "Jul 2022",
      end: "Present",
      description:
        "前期负责直播订阅会员的用户转化和支付POC；后期转型留资业务，帮助线上服务型主播（律师、教练、设计师等）在直播中获得潜在用户并完成深度转化，同时担任主播经营工具和生态治理方向POC。拥有丰富的跨团队协调与推动项目落地的经验。",
    },
    {
      company: "携程 · 智行火车票",
      href: "https://www.ctrip.com",
      badges: [],
      location: "Shanghai, China",
      title: "产品经理",
      logoUrl: "/ctriplogo.png",
      start: "Jul 2017",
      end: "Jul 2022",
      description:
        "前期负责微信小程序抢票增长（春节期间千万级DAU）；中期担任会员及公共平台产品负责人（5人团队），从0搭建付费会员和等级积分体系；后期担任汽车票新产品线负责人（管理4人团队）。5年5次晋升。",
    },
  ],
  education: [
    {
      school: "大连理工大学",
      href: "https://www.dlut.edu.cn",
      degree: "硕士 · 环境科学与工程",
      logoUrl: "/dlutlogos.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "东南大学",
      href: "https://www.seu.edu.cn",
      degree: "本科 · 环境工程",
      logoUrl: "/SEUlogo.png",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "TikTok 订阅支付体系",
      href: "/projects/subscription",
      dates: "Jul 2022 - Oct 2024",
      active: false,
      description:
        "TikTok直播订阅早期仅支持一口价，主播无法灵活定价。三步迭代：自定义定价→多档位套餐+升降级→差异化定价策略推荐。被订阅数+12%，收入+10%。",
      technologies: [
        "Payment Infra",
        "Pricing Strategy",
        "Subscription",
        "POC",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/subscription",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-subscription.svg",
      video: "",
    },
    {
      title: "直播私信转化提效",
      href: "/projects/dm-tools",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "留资主播缺少有效的私信转化工具导致潜在客户流失。诊断3个断裂点，搭建私信引导工具矩阵，主导AI识别模型产品化落地。私信转化+35%，人均线索率+25%。",
      technologies: [
        "AI Model",
        "Conversion",
        "B2C Tools",
        "Data Dashboard",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/dm-tools",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-dm.svg",
      video: "",
    },
    {
      title: "直播留资开放生态",
      href: "/projects/open-ecosystem",
      dates: "Jun 2025 - Present",
      active: true,
      description:
        "平台自建工具与主播已有三方工具存在结构性矛盾。通过双线MVP验证，输出开放生态战略提案，与Leadership达成一致，推动数据归因和开放平台搭建。CTR+100%，线索转化率+100%。",
      technologies: [
        "Product Strategy",
        "Data Analysis",
        "A/B Testing",
        "Cross-team",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/open-ecosystem",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-ecosystem.svg",
      video: "",
    },
    {
      title: "智行付费会员体系",
      href: "/projects/membership",
      dates: "Jul 2018 - Jan 2022",
      active: false,
      description:
        "围绕火车票用户「抢不到票」的核心焦虑，从0搭建付费会员体系。设计三类场景权益（抢票/出行/商旅）+等级积分体系+试用模式引导转化。付费会员近千万，收益同比+480%，入围CEO大奖。",
      technologies: [
        "Membership",
        "Monetization",
        "User Growth",
        "Team Lead",
      ],
      links: [
        {
          type: "详情",
          href: "/projects/membership",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-membership.svg",
      video: "",
    },
    {
      title: "直播留资经营工具 Service+",
      href: "/projects/service-plus",
      dates: "Nov 2024 - Jun 2025",
      active: false,
      description:
        "留资主播缺乏获取用户线索的平台抓手。从0搭建经营工具入口，集成私信、表单等工具，设定准入清退门槛；协调6+团队推动行业认证上线。留资作者+23%，开播留存+15%。",
      technologies: ["从0到1", "Creator Tools", "A/B Testing", "Governance"],
      links: [
        {
          type: "详情",
          href: "/projects/service-plus",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project-serviceplus.svg",
      video: "",
    },
    {
      title: "行业认证体系",
      href: "",
      dates: "2025 - 2026",
      active: false,
      description:
        "从0搭建直播行业资质认证审核体系，设计标签消费框架（准入/挂载/清退分层），协调6+团队推动落地。",
      technologies: ["Compliance", "Cross-team", "System Design"],
      links: [],
      image: "/project-certification.svg",
      video: "",
    },
    {
      title: "智行微信小程序增长",
      href: "",
      dates: "2017 - 2022",
      active: false,
      description:
        "作为微信小程序抢票增长方向POC，最早引领抢票裂变玩法，春节期间实现千万级访问DAU。负责小程序功能搭建、新客增长和汽车票产品线。",
      technologies: ["WeChat Mini Program", "Growth", "Viral"],
      links: [],
      image: "/project-growth.svg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI直播互动游戏（Hackathon冠军）",
      dates: "June 2026",
      location: "ByteDance Hackathon, Sydney",
      description:
        "负责核心交互设计、内容模型输出以及模型评测。实现用户评论实时改变游戏剧情与角色——智能识别可触发交互的用户评论；设计模型队列分别生成对应场景剧情并设定优先级；将剧情实时更新至主播侧，由主播决定走向后实时同步给观众，确保双端体验流畅。1天完成产品Demo开发，获TikTok LIVE 2026 Hackathon冠军。",
      image: "",
      links: [
        {
          title: "Demo",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://ai-game-jam.vercel.app/wasteland/WASTELAND%20LIVE%20(Viewer).html",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/CNLarrylai/ai-game-jam",
        },
      ],
    },
    {
      title: "AI深度融入PM工作流",
      dates: "2025 - Present",
      location: "日常实践",
      description:
        "使用Claude Code连接飞书CLI获取文档及数据库权限，利用AI自动生成SQL进行数据查询，自动检索头部作者功能使用数据并定时推送分析报告。利用Claude Code自动生成PRD框架与交互细节Prompt，配合Claude Design生成原型图，基于评审纪要自动更新文档。",
      image: "",
      links: [],
    },
  ],
} as const;
