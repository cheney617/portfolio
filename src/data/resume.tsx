import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Xin Chen",
  initials: "XC",
  url: "https://xinchen.dev",
  location: "Shanghai / Sydney",
  locationLink: "https://www.google.com/maps/place/sydney",
  description:
    "8.5年C端产品 · 从单点业务到完整商业链路负责人 · 近一年深度实践AI×产品",
  summary:
    "携程5年，5次晋升。从0搭建千万级付费会员和等级积分体系，同时作为微信小程序抢票增长方向POC，最早引领抢票裂变玩法，春节期间实现千万级访问DAU。TikTok LIVE 4年，前期作为订阅会员方向POC，主导支付体系搭建与主播侧商业化转型；后期转型留资业务方向，从经营工具搭建到私信转化提效，再到推动开放生态方向落地。完成了从单点业务方向角色到完整商业链路负责人的转变。实线管理5人团队，跨6+团队协调推动项目落地，海外全英文办公2.5年。近一年深度实践AI×产品。",
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
      logoUrl: "/tiktok.svg",
      start: "Jul 2022",
      end: "Present",
      description:
        "前期作为订阅会员方向POC，从0搭建订阅支付体系（自定义定价→多档位套餐→差异化策略推荐，被订阅数+8%），推动订阅主播侧商业化转型。后期转型留资业务方向：搭建Service+经营橱窗（留资作者+23%，开播时长+15%），设计私信转化工具（转化+35%，AI模型识别高意向用户），主导开放生态方向探索并推动决策落地（拉通商业化/开放平台/外部Calendly，三方链接CTR+100%）。协调6+团队（商业化/KYB/KYC/PTE/USDS/法务）推动行业认证体系上线。",
    },
    {
      company: "携程 · 智行火车票",
      href: "https://www.ctrip.com",
      badges: [],
      location: "Shanghai, China",
      title: "产品经理 · 会员+平台产品负责人（5人团队）",
      logoUrl: "/ctrip.png",
      start: "Jul 2017",
      end: "Jul 2022",
      description:
        "从0搭建付费会员和等级积分体系（累计近千万用户，收益同比+480%，2020入围CEO大奖）。同时作为微信小程序抢票增长方向POC，最早引领抢票裂变玩法，春节期间实现千万级访问DAU。5人团队负责人，5年5次晋升。同时负责携程汽车票产品线的票量、收益和用户增长。",
    },
  ],
  education: [
    {
      school: "大连理工大学",
      href: "https://www.dlut.edu.cn",
      degree: "硕士 · 环境科学与工程",
      logoUrl: "/dlut.png",
      start: "2014",
      end: "2017",
    },
    {
      school: "东南大学",
      href: "https://www.seu.edu.cn",
      degree: "本科 · 环境工程",
      logoUrl: "/seu.svg",
      start: "2010",
      end: "2014",
    },
  ],
  projects: [
    {
      title: "直播留资开放生态",
      href: "/projects/open-ecosystem",
      dates: "Nov 2024 - Jun 2026",
      active: true,
      description:
        "在直播留资深度转化工具的探索中，发现平台闭环与作者自有工具的结构性矛盾。拉通商业化/开放平台/外部Calendly等多方资源完成MVP验证（三方链接CTR+100%，Calendly 1240绑定）。最终决策：以带数据归因的方式灵活支持作者配置外链，同步与协作方沟通输出SDK让三方工具集成。",
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
      title: "直播私信转化提效",
      href: "/projects/dm-tools",
      dates: "Sep 2025 - Present",
      active: true,
      description:
        "诊断私信转化链路3个断裂点（直播中无法响应/无标准话术/高意向用户流失），分层设计工具化+AI识别方案。上线高意向评论识别模型和私信自动承接工具，私信转化+35%，人均线索率+25%。规划AI Chatbot二期（预估CVR+60%），量化三条广告收益路径说服决策者。",
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
      title: "智行付费会员体系",
      href: "/projects/membership",
      dates: "Jul 2018 - Jan 2022",
      active: false,
      description:
        "找到火车票用户核心焦虑「抢不到票」，围绕'焦虑→确定性'的逻辑从0搭建付费会员体系。设计三类场景权益（抢票/出行/商旅），叠加等级分层和积分闭环。付费会员近千万，收益同比+480%，入围CEO大奖。5人团队负责人，5年5次晋升的核心项目。",
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
      title: "TikTok 订阅支付体系",
      href: "/projects/subscription",
      dates: "Jun 2023 - Oct 2024",
      active: false,
      description:
        "作为订阅会员方向POC，从0搭建直播订阅支付体系。分三步迭代基建：先开放单套餐自定义定价，再搭建多档位套餐架构和升降级结算，最后叠加基于数据的差异化定价策略推荐。同步推动订阅主播侧商业化转型。被订阅数+8%，收入+2%。",
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
      title: "Service+ 经营橱窗搭建",
      href: "",
      dates: "Nov 2024 - Jun 2025",
      active: false,
      description:
        "为留资作者搭建承载多留资工具的直播间经营橱窗，将作者经营行为迁移至平台内。设计行业预选工具组合和经营罗盘。留资作者+23%，开播时长+15%。",
      technologies: ["从0到1", "Creator Tools", "A/B Testing"],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "行业认证体系",
      href: "",
      dates: "2025 - 2026",
      active: false,
      description:
        "从0搭建直播行业资质认证审核体系，跨6+团队（商业化/KYB/KYC/PTE/USDS/法务）协调落地。设计标签消费框架（准入/挂载/清退分层），打通VBA身份升级路径。",
      technologies: ["Compliance", "Cross-team", "System Design"],
      links: [],
      image: "",
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
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "AI × 直播互动游戏（Hackathon冠军）",
      dates: "June 2026",
      location: "ByteDance Hackathon, Sydney",
      description:
        "TikTok LIVE组内Hackathon第一名，TikTok Hackathon冠军，TikTok LIVE Net冠军。设计评论驱动的AI叙事引擎：评论智能分类（5类，<1ms）+ Claude API叙事生成（4种场景）+ WebSocket主播-观众实时同步。末日求生主题，从idea到完整可玩Demo仅2天。",
      image: "",
      links: [
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
        "将AI工具深度融入产品经理日常工作流。用Claude Code搭建数据监控自动化（SQL生成+定时推送飞书群）、PRD全链路辅助（功能简介→框架→交互→原型→评审纪要自动更新）、从0开发提效工具和直播Case Review自动化（ASR全切片分析，覆盖12场景×10角色类型）。",
      image: "",
      links: [],
    },
  ],
} as const;
