import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Elevate your fitness journey with our carefully crafted workout
          sessions designed to improve strength, endurance, and flexibility.
        </p>
        <img src="/img05.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our dynamic bootcamps tailored for every fitness level.
          Experience high-energy workouts that push your limits and bring out
          your best.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Strength Training Bootcamp</h4>
            <p>
              Build muscle and boost your metabolism with structured strength
              workouts that focus on proper form and technique.
            </p>
          </div>
          <div>
            <h4>HIIT (High-Intensity Interval Training)</h4>
            <p>
              Burn calories fast with heart-pumping intervals that maximize fat
              loss while improving cardiovascular health.
            </p>
          </div>
          <div>
            <h4>Functional Fitness Bootcamp</h4>
            <p>
              Improve your overall mobility and coordination through exercises
              that mimic real-life movements.
            </p>
          </div>
          <div>
            <h4>Mind-Body Bootcamp</h4>
            <p>
              A holistic approach combining strength, balance, and mindfulness
              through yoga and dynamic stretching.
            </p>
          </div>
          <div>
            <h4>Unleash Your Madness Bootcamp</h4>
            <p>
              Experience unconventional workouts that challenge your mental and
              physical limits, leaving you energized and motivated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
