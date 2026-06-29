// Bilingual text helper
export type Bi = { zh: string; en: string };
export function t(bi: Bi | string, lang: "zh" | "en"): string {
  if (typeof bi === "string") return bi;
  return bi[lang];
}

interface ProjectDetail {
  title: Bi;
  subtitle: Bi;
  metrics: { label: Bi; value: string }[];
  background: Bi;
  flowDiagram: Bi;
  approach: Bi[];
  results: Bi[];
  reflection: Bi;
  links?: { label: string; href: string }[];
}

export const PROJECTS: Record<string, ProjectDetail> = {
  "open-ecosystem": {
    title: { zh: "直播留资开放生态", en: "Open Platform for Lead Generation" },
    subtitle: { zh: "发现平台与创作者工具的结构性矛盾，用MVP验证找到共赢路径", en: "Identified structural conflict between platform and creator tools, found win-win path via MVP" },
    metrics: [
      { label: { zh: "留资工具CTR", en: "Lead tool CTR" }, value: "+100%" },
      { label: { zh: "开播留存净提升", en: "Streaming retention" }, value: "+12~16pp" },
    ],
    background: { zh: "线上服务型创作者（律师、教练等）有三种变现模式：卖内容、卖服务、收线索。平台最初的思路是自建工具来闭环，但我在推进过程中发现了一个根本性矛盾：平台的抽佣比例远高于创作者已有的第三方工具。这不是产品做得不够好的问题，而是商业模式层面的冲突——平台越想闭环，创作者越往外跑，最终用户的转化行为无法被追踪，平台也无法优化推荐和广告投放。", en: "Service-oriented creators (lawyers, coaches, etc.) have three monetization models: selling content, services, or collecting leads. The platform initially tried to build tools in-house, but I discovered a fundamental conflict: the platform's commission rate was far higher than creators' existing third-party tools. This wasn't a product quality issue — it was a business model conflict. The more the platform tried to keep everything in-house, the more creators redirected users elsewhere, causing attribution loss." },
    flowDiagram: { zh: "做工具 → 发现矛盾 → 重新定义方向 → 双线MVP验证 → 数据驱动路径选择", en: "Build tools → Discover conflict → Redefine direction → Dual-track MVP → Data-driven path selection" },
    approach: [
      { zh: "重新定义方向：从「自建工具与创作者竞争」转向「开放平台能力，让创作者接入自有工具的同时平台获得数据归因」", en: "Redefined direction: from competing with creators' tools to opening platform capabilities while gaining data attribution" },
      { zh: "设计双线MVP验证：一条线验证用户是否愿意通过平台访问创作者的外部服务，另一条线验证创作者是否愿意将预约工具集成到平台内", en: "Designed dual-track MVP: one track validating user willingness to access creator services through platform, another validating creator willingness to integrate booking tools" },
      { zh: "整合多方资源：拉通了商业化、开放平台、合规、以及外部合作方的资源，在各方利益诉求不同的情况下推动MVP落地", en: "Coordinated cross-functional resources: aligned monetization, open platform, compliance, and external partners with different interests to ship MVP" },
      { zh: "输出战略提案：基于两条MVP的数据结果，量化不同路径的长期收益预估，与Leadership达成战略一致", en: "Delivered strategic proposal: quantified long-term projections based on MVP data, aligned with leadership on platform roadmap" },
    ],
    results: [
      { zh: "留资工具CTR提升100%——验证了用户对创作者服务有明确的访问意愿", en: "Lead tool CTR +100% — validated user intent to access creator services" },
      { zh: "Calendly绑定对开播留存的净提升为+12至+16个百分点——深度转化工具正向激励了创作者的经营行为", en: "Calendly integration drove +12~16pp streaming retention — deep conversion tools positively incentivized creator engagement" },
      { zh: "战略提案获Leadership认可，进入规模化推广阶段", en: "Strategic proposal approved by leadership, entering scale-up phase" },
    ],
    reflection: { zh: "平台的意愿和创作者的诉求确实不能完全对齐——创作者希望既获得流量又拿到尽可能多的收入，平台希望从流量中赚到足够的价值。如果平台和创作者争利，长期来看创作者一定不愿意投入足够的时间。所以还是要不断寻找双方共赢的方式。这也验证了我们能够设计多个MVP小步快跑去验证不同方向的假设，从而推导出最优路径。", en: "Platform goals and creator needs can never fully align — creators want traffic and maximum revenue, while platforms want to capture value from that traffic. If platforms compete with creators, creators will inevitably reduce their investment. The key is to keep finding win-win solutions. This validated our approach of designing multiple MVPs to test different hypotheses and derive the optimal path." },
    links: [],
  },
  "dm-tools": {
    title: { zh: "直播私信转化提效", en: "DM Conversion with AI" },
    subtitle: { zh: "诊断转化链路断裂点，用AI+工具化方案提升线索获取效率", en: "Diagnosed funnel breakpoints, improved lead acquisition with AI + tooling" },
    metrics: [
      { label: { zh: "私信转化", en: "DM conversion" }, value: "+35%" },
      { label: { zh: "人均线索率", en: "Per-creator lead rate" }, value: "+25%" },
      { label: { zh: "活跃私信留存", en: "Active DM retention" }, value: "+10%" },
    ],
    background: { zh: "直播场景下，创作者可以通过引导用户发送私信来获取潜在客户线索。但实际转化效率很低：创作者正在直播时无法逐条回复私信，用户不知道该问什么导致沟通成本高，而真正有意向的用户又没有被及时识别和跟进——大量潜在客户就这样流失了。", en: "During live streams, creators can acquire leads by guiding users to send DMs. But conversion was very low: creators couldn't reply to DMs while streaming, users didn't know what to ask, and high-intent users weren't being identified or followed up — leading to massive lead loss." },
    flowDiagram: { zh: "诊断断裂点 → 搭建工具矩阵 → 上线数据看板 → AI识别高意向用户 → 自动触发引导", en: "Diagnose breakpoints → Build toolkit → Launch dashboard → AI identifies high-intent users → Auto-trigger guidance" },
    approach: [
      { zh: "搭建私信引导工具矩阵：设计自动欢迎语、快捷提示问题和关键词自动回复，让用户进入私信界面就知道该问什么", en: "Built DM guidance toolkit: auto-greeting, quick prompts, keyword auto-reply — users know what to ask the moment they enter DM" },
      { zh: "建立转化可见性：上线实时线索数据看板，让创作者第一次能看到完整的转化漏斗", en: "Established conversion visibility: launched real-time lead dashboard so creators could see the full conversion funnel for the first time" },
      { zh: "AI识别高意向用户：上线评论意图识别模型，从直播间实时评论流中自动捕捉高意向信号。用户点击即可将评论内容填充至私信界面，一键发送", en: "AI-powered intent recognition: deployed comment classification model to capture high-intent signals from live comment stream. Users click to pre-fill comment into DM for one-click send" },
    ],
    results: [
      { zh: "私信转化率提升35%——自动承接工具让创作者在直播中也不会漏掉潜在客户", en: "DM conversion +35% — auto-response tools ensure creators never miss potential leads during streams" },
      { zh: "人均线索率提升25%——标准化的引导降低了用户和创作者双方的沟通成本", en: "Per-creator lead rate +25% — standardized guidance reduced communication costs for both sides" },
      { zh: "活跃私信留存率提升10%——数据看板让创作者形成了经营习惯", en: "Active DM retention +10% — dashboard helped creators build operational habits" },
    ],
    reflection: { zh: "AI模型识别和生成对应的文案配置建议，能够显著帮助创作者获得来自用户的有效私信线索。尤其是在直播的实时互动场景下，它帮助无暇分身的主播快速锁定高意向用户，确保用户不会流失——主播可以在关播后继续跟用户触达。这是一次有效使用AI结合业务的尝试。", en: "AI-powered intent recognition and automated script suggestions significantly helped creators acquire effective DM leads. In the real-time live streaming context, it helped busy creators quickly lock in high-intent users, ensuring no leads were lost — creators could follow up after the stream ended. This was an effective application of AI in a business context." },
    links: [],
  },
  "subscription": {
    title: { zh: "TikTok 订阅支付体系", en: "Subscription Payment Infrastructure" },
    subtitle: { zh: "从固定定价到多档位套餐，三步迭代搭建支付基建", en: "From fixed pricing to multi-tier plans, three-phase payment infrastructure buildout" },
    metrics: [
      { label: { zh: "被订阅数", en: "Subscription rate" }, value: "+12%" },
      { label: { zh: "收入", en: "Revenue" }, value: "+10%" },
    ],
    background: { zh: "TikTok直播订阅是平台核心的创作者变现产品，但早期只支持平台统一定价，创作者无法自主调整价格，也只能设置单一套餐，无法满足不同用户的付费能力。竞品已支持多档位套餐和灵活定价，我们的支付基建差距明显。", en: "TikTok LIVE subscriptions were a core creator monetization product, but initially only supported fixed platform pricing. Creators couldn't adjust prices or offer multiple tiers. Competitors already supported multi-tier plans and flexible pricing — our payment infrastructure gap was significant." },
    flowDiagram: { zh: "自定义定价 → 多档位套餐 → 升降级结算 → 差异化定价推荐", en: "Custom pricing → Multi-tier plans → Upgrade/downgrade billing → Personalized pricing" },
    approach: [
      { zh: "第一步 — 开放自定义定价：让创作者在合理范围内自主设置订阅价格", en: "Phase 1 — Custom pricing: enabled creators to set subscription prices within reasonable ranges" },
      { zh: "第二步 — 多档位套餐：支持创作者创建多个价格档位，每个套餐独立权益", en: "Phase 2 — Multi-tier plans: supported multiple price tiers with independent benefits per plan" },
      { zh: "第三步 — 升降级结算+差异化定价：设计套餐间升级时的费用折算方案，结合创作者数据推荐最优定价策略", en: "Phase 3 — Upgrade billing + pricing recommendations: designed pro-rata upgrade billing, recommended optimal pricing based on creator data" },
    ],
    results: [
      { zh: "被订阅数提升12%（AB实验验证）", en: "Subscription rate +12% (A/B tested)" },
      { zh: "收入提升10%（AB实验验证）", en: "Revenue +10% (A/B tested)" },
    ],
    reflection: { zh: "创作者在拥有一定粉丝规模和变现能力后，都会倾向于使用订阅这样的连续付费形式来获得持续收入——这是经营能力达到一定量级后的必然趋势。但我们也发现，即使把订阅能力做到极限，它也只满足了一部分能力较强的创作者和一部分愿意付费的用户。这也推导出了我们后续将业务方向转变为帮助线上服务型创作者获取潜在客户的决策。", en: "Creators with sufficient audience size inevitably gravitate toward subscription-based recurring revenue. But we also found that even a fully-featured subscription system only serves a subset of strong creators and willing-to-pay users. This insight drove our subsequent business pivot toward helping service-oriented creators acquire potential clients." },
    links: [],
  },
  "membership": {
    title: { zh: "智行付费会员体系", en: "Paid Membership System" },
    subtitle: { zh: "围绕用户核心焦虑，从0搭建近千万级付费会员体系", en: "Built a ~10M-user paid membership system from scratch, centered on user anxiety" },
    metrics: [
      { label: { zh: "付费会员", en: "Paying members" }, value: "~10M" },
      { label: { zh: "收益同比", en: "Revenue YoY" }, value: "+480%" },
      { label: { zh: "用户价值", en: "User value" }, value: "+8%" },
    ],
    background: { zh: "火车票是典型的低频刚需——用户买完就走、复购周期长、价格敏感。传统会员思路是堆权益，但在这个场景下大部分权益感知不强。真正要解决的问题是：找到用户在这个场景下的核心焦虑，把焦虑变成确定性，用户就愿意付费。", en: "Train tickets are a classic low-frequency necessity — users buy and leave, with long repurchase cycles and high price sensitivity. Traditional membership approaches pile on benefits, but most feel insignificant in this context. The real challenge: find the core user anxiety and turn it into certainty — then users will pay." },
    flowDiagram: { zh: "找到核心焦虑 → 设计三类权益 → 试用引导转化 → 等级分层 → 积分闭环", en: "Identify core anxiety → Design 3 benefit tiers → Trial-to-paid conversion → Tier system → Points loop" },
    approach: [
      { zh: "围绕「抢不到票」的核心焦虑设计付费权益：无限次优先抢票+首单保障+实时排队信息", en: "Designed paid benefits around 'unable to secure tickets' anxiety: priority booking + first-order guarantee + real-time queue info" },
      { zh: "扩展出行和商旅场景权益：出行返现、指定下铺、免退改手续费、快速安检、报销凭证免邮", en: "Extended to travel and corporate benefits: cashback, lower berth, free cancellation, fast security, free receipt mailing" },
      { zh: "设计试用模式：针对低频用户设计限时试用，先体验权益再决定是否付费", en: "Designed trial mode: let low-frequency users experience benefits before committing to pay" },
      { zh: "搭建等级体系和积分闭环：按出行频次分层，跨业务线交叉引导，积分激励+兑换闭环", en: "Built tier system and points loop: frequency-based leveling, cross-business-line cross-sell, points incentives + redemption" },
    ],
    results: [
      { zh: "付费会员累计近千万，入围2020年公司年度CEO大奖", en: "~10M paying members, nominated for 2020 company-wide CEO Award" },
      { zh: "收益同比增长480%", en: "Revenue +480% YoY" },
      { zh: "等级体系上线后用户价值提升8%", en: "Tier system user value +8%" },
      { zh: "积分体系上线后用户价值提升6%", en: "Points system user value +6%" },
    ],
    reflection: { zh: "会员产品的核心不是堆权益，而是解决用户真正的焦虑点——这是1，其他都是后面的0。当用户对平台产生信任后，等级和积分体系能引导他们把更多行为留在平台内，完成习惯迁移。旅游平台本质上不是高复购场景，但确实是高客单价场景——把用户的出行行为轨迹尽可能多地留在平台内，对平台来说就更有价值。", en: "The core of a membership product isn't piling on benefits — it's solving users' real anxiety. That's the '1'; everything else is a '0' after it. Once users trust the platform, tier and points systems guide them to keep more behavior on-platform. Travel isn't high-frequency, but it is high-value — capturing more of a user's travel journey on-platform creates compounding value." },
    links: [],
  },
  "service-governance": {
    title: { zh: "经营工具与生态治理", en: "Creator Tools & Governance" },
    subtitle: { zh: "从0搭建经营工具入口，确保好的工具只放给有资质的创作者", en: "Built creator tools from scratch, ensuring quality tools only reach qualified creators" },
    metrics: [
      { label: { zh: "留资作者", en: "Lead-gen creators" }, value: "+23%" },
      { label: { zh: "留资作者开播留存", en: "Streaming retention" }, value: "+15%" },
      { label: { zh: "目标作者浓度", en: "Target creator ratio" }, value: ">80%" },
    ],
    background: { zh: "线上服务型创作者的经营行为高度分散——获取客户线索的工具散落在不同入口，没有统一的数据看板。同时，缺少统一的准入标准，部分不具备服务资质的创作者也在使用这些工具，影响了用户体验。", en: "Service-oriented creators' business activities were highly fragmented — lead collection tools scattered across different entry points with no unified dashboard. Meanwhile, lack of access standards meant unqualified creators were using these tools, hurting user experience." },
    flowDiagram: { zh: "搭建工具入口 → 集成多个线索工具 → 数据看板 → 设计准入清退标准 → 推动行业认证", en: "Build tool entry → Integrate lead tools → Dashboard → Design access standards → Industry certification" },
    approach: [
      { zh: "从0搭建经营工具入口：设计统一的工具管理中心，创作者可以根据行业选择合适的工具组合", en: "Built creator tool hub from scratch: unified management center where creators select industry-appropriate tool bundles" },
      { zh: "建立经营数据看板：基于创作者的直播表现和线索数据生成经营分析", en: "Built business dashboard: generated operational analytics from creator streaming performance and lead data" },
      { zh: "设计准入和清退标准：确保只有认真经营、具备服务资质的创作者才能使用高级工具", en: "Designed access/suspension standards: ensured only seriously engaged, qualified creators could access advanced tools" },
      { zh: "推动行业认证上线：协调6+个团队，搭建行业资质认证体系", en: "Launched industry certification: coordinated 6+ teams to build qualification certification system" },
    ],
    results: [
      { zh: "使用经营工具的创作者数量增长23%", en: "Creator tool adoption +23%" },
      { zh: "创作者开播留存提升15%", en: "Creator streaming retention +15%" },
      { zh: "目标创作者在工具用户中的占比超过80%", en: "Target creator ratio among tool users >80%" },
      { zh: "行业认证体系成功上线", en: "Industry certification system launched" },
    ],
    reflection: { zh: "核心是确保把有价值的工具提供给认真经营、真正把平台当成有价值营销渠道的创作者。一方面让优秀创作者认可平台的商业化价值，愿意投入更多时间和资源；另一方面也让这些创作者为平台提供多元化的优质内容。这是一个螺旋上升的正循环。", en: "The core principle is ensuring valuable tools reach creators who genuinely treat the platform as a marketing channel worth investing in. This creates a positive flywheel: quality creators get better tools, they invest more time, they produce better content, which attracts more users." },
    links: [],
  },
  "ai-game": {
    title: { zh: "AI直播互动游戏", en: "AI Live Interactive Game" },
    subtitle: { zh: "评论驱动AI叙事 · TikTok LIVE Hackathon冠军", en: "Comment-driven AI narrative · TikTok LIVE Hackathon Champion" },
    metrics: [
      { label: { zh: "成绩", en: "Result" }, value: "Champion" },
      { label: { zh: "开发周期", en: "Dev time" }, value: "1 day" },
    ],
    background: { zh: "TikTok LIVE Hackathon命题：用AI创造直播新体验。我提出将小说/剧集IP转化为实时互动游戏——观众通过评论直接影响游戏走向，评论被AI实时识别后驱动叙事引擎生成剧情事件，主播与观众通过WebSocket实时同步。", en: "TikTok LIVE Hackathon challenge: create new live streaming experiences with AI. I proposed converting novel/show IPs into real-time interactive games — viewer comments drive game direction, AI classifies comments and generates narrative events, host and viewers sync in real-time via WebSocket." },
    flowDiagram: { zh: "评论输入 → 智能分类 → 场景剧情生成 → 优先级排序 → 主播决策 → 观众同步", en: "Comment input → Classification → Narrative generation → Priority ranking → Host decision → Viewer sync" },
    approach: [
      { zh: "产品设计：提出「评论驱动AI叙事」的核心玩法，设计末日求生世界观和六角格探索机制", en: "Product design: proposed 'comment-driven AI narrative' core mechanic, designed post-apocalyptic world and hex-grid exploration" },
      { zh: "评论智能分类：设计5类识别（环境探索/行动指令/角色互动/资源管理/噪音过滤），延迟<1ms", en: "Comment classification: designed 5-category recognition (exploration/action/character/resource/noise), <1ms latency" },
      { zh: "AI叙事生成：设计4种场景Prompt，基于Claude API结构化输出，能力驱动剧情系统", en: "AI narrative engine: designed 4 scene prompts via Claude API with structured output, capability-driven story system" },
      { zh: "兜底事件矩阵：70+预设事件确保AI生成失败时体验不中断", en: "Fallback event matrix: 70+ preset events ensure uninterrupted experience when AI generation fails" },
      { zh: "模型评测：设计评测框架验证生成质量", en: "Model evaluation: designed evaluation framework to verify generation quality" },
    ],
    results: [
      { zh: "1天完成从idea到完整可玩Demo", en: "Shipped playable demo in 1 day from idea to completion" },
      { zh: "获TikTok LIVE Hackathon冠军", en: "Won TikTok LIVE Hackathon Champion" },
    ],
    reflection: { zh: "这个项目验证了AI在直播场景的核心价值：让一个PM也能在极短时间内从idea到完整可玩的Demo。AI不只是工具，而是产品经理的新工作方式。", en: "This project validated AI's core value in live streaming: enabling a single PM to go from idea to playable demo in record time. AI isn't just a tool — it's a new way of working for product managers." },
    links: [
      { label: "Demo", href: "https://ai-game-jam.vercel.app/wasteland/WASTELAND%20LIVE%20(Viewer).html" },
      { label: "GitHub", href: "https://github.com/CNLarrylai/ai-game-jam" },
    ],
  },
  "ai-workflow": {
    title: { zh: "AI深度融入PM工作流", en: "AI-Powered PM Workflow" },
    subtitle: { zh: "从辅助工具到系统性重构PM生产力", en: "From assistant tool to systematic PM productivity overhaul" },
    metrics: [],
    background: { zh: "产品经理的日常工作中存在大量重复性高、结构化强但耗时的任务：数据查询需要手写SQL、PRD撰写需要从零搭框架、Case Review需要人工逐条分析。这些任务占用了大量本可以用于思考和决策的时间。", en: "PM daily work involves many repetitive, structured but time-consuming tasks: writing SQL for data queries, building PRD frameworks from scratch, manually analyzing case reviews one by one. These tasks consume time that should be spent on thinking and decision-making." },
    flowDiagram: { zh: "数据监控自动化 → PRD全链路提效 → Case Review自动化", en: "Data monitoring automation → PRD workflow acceleration → Case review automation" },
    approach: [
      { zh: "数据监控自动化：使用Claude Code连接飞书CLI，AI自动生成SQL查询，自动检索头部作者数据，生成分析报告并定时推送", en: "Data monitoring: Connected Claude Code to Lark CLI, auto-generated SQL queries, automated top-creator data retrieval with scheduled report delivery" },
      { zh: "PRD全链路提效：AI生成PRD框架和交互细节，配合Claude Design生成原型图，基于评审纪要自动更新文档", en: "PRD workflow: AI-generated PRD frameworks and interaction specs, prototyped with Claude Design, auto-updated docs from review meeting notes" },
      { zh: "Case Review自动化：基于语音识别对直播录像进行全切片分析，从0开发提效工具", en: "Case review automation: Used ASR to analyze livestream recordings, built efficiency tools from scratch for structured analysis" },
    ],
    results: [
      { zh: "数据监控：单次查询时间从30分钟缩短到2分钟", en: "Data monitoring: query time reduced from 30 min to 2 min per session" },
      { zh: "PRD提效：初稿生成时间从半天缩短到1小时内", en: "PRD workflow: first draft generation reduced from half a day to under 1 hour" },
      { zh: "Case Review：从人工逐条观看变为自动切片分析", en: "Case review: from manual viewing to automated slice analysis" },
    ],
    reflection: { zh: "AI工具的价值不在于替代PM思考，而在于释放PM被事务性工作占用的时间。当数据查询、文档撰写、Case分析被自动化后，PM可以把更多精力投入到真正需要判断力的工作上。", en: "AI's value isn't replacing PM thinking — it's freeing PMs from operational overhead. When data queries, document writing, and case analysis are automated, PMs can invest more energy in work that truly requires judgment." },
    links: [],
  },
};
