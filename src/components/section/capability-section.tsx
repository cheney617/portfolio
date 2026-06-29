"use client";

import LayeredStack from "@/components/magicui/layered-stack";
import { DATA } from "@/data/resume";

export default function CapabilitySection() {
  return (
    <section id="capabilities" className="relative py-10">
      <LayeredStack
        layers={DATA.capabilities}
        eyebrow="Capability Stack"
        title="完整的产品能力栈"
        description="从底层支付基建到上层AI产品，9年沉淀出一套可复用的端到端能力。向下滚动逐层展开。"
      />
    </section>
  );
}
