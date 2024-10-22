import butterfly from "./butterfly.png";

export default function LoveClub() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <img src={butterfly} className="h-14" />
        <div className="font-mochiyPop text-2xl">Love Club </div>
      </div>
      <p>
        How hard did I take the breakup? I designed a new dating app, from
        algorithm to brand.
      </p>
      <p>
        I was disappointed by the ways that dating apps are adopting generative
        AI.
        <p>
          They are primarily using it to generate conversation options for
          people. I think this is under-utlisation of gen-AI's power.
        </p>
        <p>
          Dating is an optimisation problem, so I fully utilised modern
          advancements in AI to make a POC that used it to its full potential.
        </p>
        <ul className="pt-4">
          I used LLMs for:
          <li>
            <b>Profile matching algorithm</b> - using embedding models for
            semantics based matching to find people with genuine things in
            common
          </li>
          <li>
            <b>Date recommendation</b> - again using embedding models to suggest
            dates both users will find genuinely interesting
          </li>
          <li>
            <b>Data extraction</b> - using a conversational bot to interactively
            find out the persons interests and who they are looking for
          </li>
        </ul>
      </p>

      <h2 className="pt-6 pb-2 font-bold text-lg">
        Some example pre-computed matches according to my algorithm
      </h2>
      <div className="max-h-80 overflow-scroll space-y-4">
        <div>
          <h2 className="font-bold">
            A nature photographer who travels the world capturing stunning
            landscapes. Lives in a tiny house off the grid. Enjoys hiking with
            their dog and practicing mindfulness.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A free-spirited traveler who lives in a camper van and explores
              different countries. Documents their adventures on a travel blog.
              Works remotely as a freelance writer.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
            <li>
              A laid-back beach lover who surfs and teaches yoga. Works
              part-time at a smoothie bar. Practices meditation daily and values
              sustainability.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A shy bookworm who loves cats and plays the violin. Dreams of
            traveling the world but works in a local library. Wears glasses.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated teacher who enjoys painting and playing the piano.
              Spends weekends volunteering at a local community center. Has a
              penchant for classic literature.
            </li>
            <li>
              A hardworking nurse who loves baking and knitting in their spare
              time. Enjoys quiet evenings at home with a good book. Volunteers
              at a local soup kitchen.
            </li>
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            Someone who enjoys cooking, hiking and rock climbing. Looking for a
            long term relationship. Lives in a van. Is tall.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A free-spirited traveler who lives in a camper van and explores
              different countries. Documents their adventures on a travel blog.
              Works remotely as a freelance writer.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            An outgoing fitness enthusiast who works as a personal trainer.
            Enjoys swimming, weightlifting, and biking. Is a vegetarian and
            volunteers at animal shelters.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A laid-back beach lover who surfs and teaches yoga. Works
              part-time at a smoothie bar. Practices meditation daily and values
              sustainability.
            </li>
            <li>
              An animal behaviorist who specializes in training therapy dogs.
              Enjoys hiking with their furry companions and practicing animal
              Reiki. Volunteers at animal shelters.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A passionate environmentalist who works for a non-profit
            organization. Enjoys gardening, birdwatching, and attending climate
            change rallies. Drives an electric car.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A laid-back beach lover who surfs and teaches yoga. Works
              part-time at a smoothie bar. Practices meditation daily and values
              sustainability.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A tech-savvy gamer who codes for fun. Spends weekends playing online
            multiplayer games with friends. Works remotely as a software
            developer. Has a collection of action figures.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A tech enthusiast who spends hours tinkering with gadgets and
              building computers. Enjoys attending tech conferences and
              participating in hackathons. Works as a cybersecurity analyst.
            </li>
            <li>
              A dedicated firefighter who enjoys woodworking as a hobby. Spends
              weekends building furniture for friends and family. Volunteers at
              a local fire safety education program.
            </li>
            <li>
              A thrill-seeking skydiver who works as a skydiving instructor.
              Enjoys adrenaline-pumping activities like bungee jumping and scuba
              diving. Owns a motorcycle.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A laid-back beach lover who surfs and teaches yoga. Works part-time
            at a smoothie bar. Practices meditation daily and values
            sustainability.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            An ambitious entrepreneur who started their own business in the
            fashion industry. Attends networking events and fashion shows
            regularly. Loves experimenting with bold styles.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A tech enthusiast who spends hours tinkering with gadgets and
              building computers. Enjoys attending tech conferences and
              participating in hackathons. Works as a cybersecurity analyst.
            </li>
            <li>
              A thrill-seeking skydiver who works as a skydiving instructor.
              Enjoys adrenaline-pumping activities like bungee jumping and scuba
              diving. Owns a motorcycle.
            </li>
            <li>
              A tech-savvy gamer who codes for fun. Spends weekends playing
              online multiplayer games with friends. Works remotely as a
              software developer. Has a collection of action figures.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A dedicated teacher who enjoys painting and playing the piano.
            Spends weekends volunteering at a local community center. Has a
            penchant for classic literature.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated social worker who advocates for children's rights.
              Enjoys painting and pottery as creative outlets. Volunteers at a
              youth mentorship program.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
            <li>
              A shy bookworm who loves cats and plays the violin. Dreams of
              traveling the world but works in a local library. Wears glasses.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A food critic who writes reviews for a popular magazine. Enjoys
            trying new restaurants and experimenting with exotic cuisines. Has a
            blog where they share culinary adventures.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A free-spirited traveler who lives in a camper van and explores
              different countries. Documents their adventures on a travel blog.
              Works remotely as a freelance writer.
            </li>
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A hardworking nurse who loves baking and knitting in their spare
            time. Enjoys quiet evenings at home with a good book. Volunteers at
            a local soup kitchen.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
            <li>
              A dedicated teacher who enjoys painting and playing the piano.
              Spends weekends volunteering at a local community center. Has a
              penchant for classic literature.
            </li>
            <li>
              A dedicated social worker who advocates for children's rights.
              Enjoys painting and pottery as creative outlets. Volunteers at a
              youth mentorship program.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A thrill-seeking skydiver who works as a skydiving instructor.
            Enjoys adrenaline-pumping activities like bungee jumping and scuba
            diving. Owns a motorcycle.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A dedicated firefighter who enjoys woodworking as a hobby. Spends
              weekends building furniture for friends and family. Volunteers at
              a local fire safety education program.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A dedicated social worker who advocates for children's rights.
            Enjoys painting and pottery as creative outlets. Volunteers at a
            youth mentorship program.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated teacher who enjoys painting and playing the piano.
              Spends weekends volunteering at a local community center. Has a
              penchant for classic literature.
            </li>
            <li>
              A passionate advocate for LGBTQ+ rights who works for an equality
              organization. Enjoys attending pride parades and hosting movie
              nights with friends. Volunteers at LGBTQ+ youth centers.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A musical prodigy who plays multiple instruments and writes their
            own songs. Performs at local coffee shops and open mic nights.
            Studies music theory in college.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated teacher who enjoys painting and playing the piano.
              Spends weekends volunteering at a local community center. Has a
              penchant for classic literature.
            </li>
            <li>
              A tech enthusiast who spends hours tinkering with gadgets and
              building computers. Enjoys attending tech conferences and
              participating in hackathons. Works as a cybersecurity analyst.
            </li>
            <li>
              A shy bookworm who loves cats and plays the violin. Dreams of
              traveling the world but works in a local library. Wears glasses.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A free-spirited traveler who lives in a camper van and explores
            different countries. Documents their adventures on a travel blog.
            Works remotely as a freelance writer.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A nature photographer who travels the world capturing stunning
              landscapes. Lives in a tiny house off the grid. Enjoys hiking with
              their dog and practicing mindfulness.
            </li>
            <li>
              A food critic who writes reviews for a popular magazine. Enjoys
              trying new restaurants and experimenting with exotic cuisines. Has
              a blog where they share culinary adventures.
            </li>
            <li>
              Someone who enjoys cooking, hiking and rock climbing. Looking for
              a long term relationship. Lives in a van. Is tall.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            An animal behaviorist who specializes in training therapy dogs.
            Enjoys hiking with their furry companions and practicing animal
            Reiki. Volunteers at animal shelters.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A nature photographer who travels the world capturing stunning
              landscapes. Lives in a tiny house off the grid. Enjoys hiking with
              their dog and practicing mindfulness.
            </li>
            <li>
              A laid-back beach lover who surfs and teaches yoga. Works
              part-time at a smoothie bar. Practices meditation daily and values
              sustainability.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A dedicated firefighter who enjoys woodworking as a hobby. Spends
            weekends building furniture for friends and family. Volunteers at a
            local fire safety education program.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
            <li>
              A tech-savvy gamer who codes for fun. Spends weekends playing
              online multiplayer games with friends. Works remotely as a
              software developer. Has a collection of action figures.
            </li>
            <li>
              A dedicated teacher who enjoys painting and playing the piano.
              Spends weekends volunteering at a local community center. Has a
              penchant for classic literature.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A dedicated stay-at-home parent who enjoys gardening and DIY
            projects. Volunteers at their children's school and organizes
            community events. Loves cooking for family gatherings.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A hardworking nurse who loves baking and knitting in their spare
              time. Enjoys quiet evenings at home with a good book. Volunteers
              at a local soup kitchen.
            </li>
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A passionate advocate for LGBTQ+ rights who works for an equality
            organization. Enjoys attending pride parades and hosting movie
            nights with friends. Volunteers at LGBTQ+ youth centers.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A dedicated social worker who advocates for children's rights.
              Enjoys painting and pottery as creative outlets. Volunteers at a
              youth mentorship program.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
            <li>
              An outgoing fitness enthusiast who works as a personal trainer.
              Enjoys swimming, weightlifting, and biking. Is a vegetarian and
              volunteers at animal shelters.
            </li>
          </ol>
        </div>

        <hr className="border-1 border-black" />
        <div>
          <h2 className="font-bold">
            A tech enthusiast who spends hours tinkering with gadgets and
            building computers. Enjoys attending tech conferences and
            participating in hackathons. Works as a cybersecurity analyst.
          </h2>
          Has top matches:
          <ol className="list-decimal">
            <li>
              A tech-savvy gamer who codes for fun. Spends weekends playing
              online multiplayer games with friends. Works remotely as a
              software developer. Has a collection of action figures.
            </li>
            <li>
              A passionate environmentalist who works for a non-profit
              organization. Enjoys gardening, birdwatching, and attending
              climate change rallies. Drives an electric car.
            </li>
            <li>
              A dedicated stay-at-home parent who enjoys gardening and DIY
              projects. Volunteers at their children's school and organizes
              community events. Loves cooking for family gatherings.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
