// "use client";
import AboutPage, { TeamMemberCard } from '@/components/About'
import { TEAM_MEMBERS } from '@/lib/team-data'

export default function page() {
    return (
        <>
            <AboutPage
                teamCards={TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            />
        </>
    )
}
