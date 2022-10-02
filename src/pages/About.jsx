import React from "react";

const About = () => {
  return (
    <section>
      <div className='flex items-center justify-center flex-col'>
        <h1 className='text-4xl font-bold py-10 text-green-800'>
          App for the Breaking Bad TV Series
        </h1>
        <p className='px-5 pb-5'>
          Breaking Bad is an American crime drama television series created and
          produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico,
          the series follows Walter White (Bryan Cranston), an underpaid,
          overqualified, and dispirited high-school chemistry teacher who is
          struggling with a recent diagnosis of stage-three lung cancer. White
          turns to a life of crime and partners with a former student, Jesse
          Pinkman (Aaron Paul), to produce and distribute crystal meth to secure
          his family's financial future before he dies, while navigating the
          dangers of the criminal underworld. The show aired on AMC from January
          20, 2008, to September 29, 2013, consisting of five seasons for a
          total of 62 episodes.
        </p>
        <h2 className='text-2xl text-green-800 py-5'>What is it about?</h2>
        <p className='px-5 pb-5'>
          Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad
          follows Walter White, a modest high school chemistry teacher who
          transforms into a ruthless kingpin in the local methamphetamine drug
          trade, driven to financially provide for his family after being
          diagnosed with inoperable lung cancer. Initially making only small
          batches of meth with his former student Jesse Pinkman in a rolling
          meth lab, Walter and Jesse eventually expand to make larger batches of
          special blue meth that is incredibly pure and creates high demand.
          Walter takes on the name "Heisenberg" to mask his identity. Because of
          his drug-related activities, Walter eventually finds himself at odds
          with his family, the Drug Enforcement Administration (DEA) through his
          brother-in-law Hank Schrader, the local gangs, and the Mexican drug
          cartels (including their regional distributors), putting him and his
          family's lives at risk.
        </p>
        <p className='text-green-800'>
          Thanks for the &nbsp;
          <span className='text-lg hover:bg-green-800 hover:text-white'>
            <a
              target={"_blank"}
              rel='noreferrer'
              href='https://www.breakingbadapi.com'
            >
              Breaking Bad API
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
