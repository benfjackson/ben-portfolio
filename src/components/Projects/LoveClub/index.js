import butterfly from "./butterfly.png";

export default function LoveClub() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img src={butterfly} className="h-14" />
        <div className="font-mochiyPop text-2xl">Love Club </div>
      </div>
      <p>
        How hard did I take the breakup? I designed a whole dating app, from
        algorithm to brand.
      </p>
      <p>
        I was disappointed by the ways that dating apps are adopting AI, there
        are more useful ways it can be used than letting it write peoples
        conversations for them.
        <p>
          Dating is an optimisation problem, so I fully utilised modern
          advancements in AI to make a POC that used it to its full potential.
        </p>
        <ul>
          Areas I used LLMs that the industry does not currently:
          <li>
            <b>data extraction</b> - using a conversational bot to interactively
            find out the persons interests and who they are looking for
          </li>
          <li>
            <b>profile matching</b> - using embedding models to match together
            compatible profiles
          </li>
          <li>
            <b>date recommendation</b> - agent behind the scenes to find a close
            venue related to users interests
          </li>
        </ul>
        allow...
      </p>
      <p>
        I employed LLMs to help with dynamic data extraction ( interactive agent
        to conversationally build you a profile on your interests&dating
        intentions etc ), and embedding models to provide accurate and flexible
        personality & interest matching.
      </p>
    </div>
  );
}
