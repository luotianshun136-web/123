import { Users } from "lucide-react";
import type { FamilyMember } from "../data/reportData";

type FamilyPanelProps = {
  members: FamilyMember[];
  summary: string;
};

export default function FamilyPanel({ members, summary }: FamilyPanelProps) {
  return (
    <section className="glass-card">
      <div className="section-title">
        <Users size={17} />
        <h2>家庭成员匹配建议</h2>
      </div>
      <p className="muted-copy">{summary}</p>

      <div className="member-list">
        {members.map((member) => (
          <article className="member-item" key={member.role}>
            <div>
              <strong>{member.role}</strong>
              <span>{member.age}｜{member.profile}</span>
            </div>
            <p>{member.sign}</p>
            <em>{member.room}</em>
          </article>
        ))}
      </div>
    </section>
  );
}
