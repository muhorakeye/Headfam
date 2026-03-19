// @ts-ignore
import CommunityHero     from '../components/sections/Community/CommunityHero';
// @ts-ignore
import CommunityMission  from '../components/sections/Community/CommunityMission';
// @ts-ignore
import CommunityImpact   from '../components/sections/Community/CommunityImpact';
// @ts-ignore
import CommunityPrograms from '../components/sections/Community/CommunityPrograms';
// @ts-ignore
import CommunityStories  from '../components/sections/Community/CommunityStories';
// @ts-ignore
import CommunityJoin     from '../components/sections/Community/CommunityJoin';

export function CommunityPage() {
  return (
    <main>
      <CommunityHero />
      <CommunityMission />
      <CommunityImpact />
      <CommunityPrograms />
      <CommunityStories />
      <CommunityJoin />
    </main>
  );
}
