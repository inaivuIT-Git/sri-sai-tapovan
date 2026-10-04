import "./calendar.css";



const dailyActivities = [

  {

    icon: "🪔",

    title: "Daily Aarti",

    text: "Begin and end the day with devotion, prayer and the divine presence of Sai Baba.",

  },

  {

    icon: "🙏",

    title: "Special Pooja",

    text: "Special prayers and poojas conducted on auspicious occasions and temple celebrations.",

  },

  {

    icon: "🎵",

    title: "Sai Bhajan",

    text: "Join together in devotional singing and experience the peace of Sai Baba's name.",

  },

  {

    icon: "📖",

    title: "Sai Satcharitra Parayan",

    text: "Devotees come together for the reading and contemplation of Sai Satcharitra.",

  },

];



const festivals = [

  {

    month: "MARCH",

    date: "25 – 27",

    title: "Shree Ram Navami",

    description:

      "A sacred celebration commemorating Lord Rama and the spirit of devotion associated with Sai Baba.",

  },

  {

    month: "JULY",

    date: "28 – 30",

    title: "Shree Guru Purnima",

    description:

      "A special occasion to express gratitude and devotion towards the Guru and Sai Baba.",

  },

  {

    month: "OCTOBER",

    date: "19 – 21",

    title: "Sai Baba Punyatithi",

    description:

      "A sacred observance remembering Sai Baba and his eternal teachings of faith, patience and service.",

  },

];



const specialEvents = [

  {

    icon: "🌺",

    title: "Special Temple Celebrations",

    text: "Festivals and spiritual celebrations conducted by the Trust throughout the year.",

  },

  {

    icon: "🕉️",

    title: "Sai Spiritual Gatherings",

    text: "Devotional gatherings that bring devotees together in prayer and remembrance of Sai Baba.",

  },

  {

    icon: "✨",

    title: "Special Occasions",

    text: "Additional poojas, bhajans and spiritual programmes may be announced by the Trust.",

  },

];



const upcomingEvents = [

  {

    day: "—",

    month: "DATE",

    title: "Upcoming Temple Event",

    time: "Details will be announced",

    text: "Please check back for upcoming events and spiritual programmes.",

  },

];



export default function CalendarPage() {

  return (

    <main className="calendar-page">

      {/* =====================================================

          HERO

      ===================================================== */}

      <section className="calendar-hero">

        <div className="calendar-hero-content">

          <p className="calendar-eyebrow">SRI SAI TAPOVAN SPIRITUAL TRUST</p>



          <h1>Temple Events</h1>



          <div className="calendar-hero-divider">

            <span>ॐ</span>

          </div>



          <p className="calendar-breadcrumb">Home&nbsp; / &nbsp;Calendar</p>

        </div>

      </section>

      {/* =====================================================

          INTRO

      ===================================================== */}

      <section className="calendar-intro">

        <div className="calendar-container">

          <p className="calendar-label">OUR SPIRITUAL CALENDAR</p>



          <h2>

            Come Together in

            <span> Faith & Devotion</span>

          </h2>



          <p className="calendar-intro-text">

            The temple is a place where devotees come together in prayer,

            devotion and service. From daily spiritual activities to special

            celebrations, every gathering offers an opportunity to remember Sai

            Baba and follow the path of faith, patience and love.

          </p>

        </div>

      </section>



      {/* =====================================================

          DAILY SPIRITUAL ACTIVITIES

      ===================================================== */}

      <section className="daily-section">

        <div className="calendar-container">

          <div className="section-heading">

            <p className="calendar-label">EVERY DAY</p>

            <h2>Daily Spiritual Activities</h2>



            <p>

              Regular activities that form part of the spiritual life of the

              temple.

            </p>

          </div>



          <div className="daily-grid">

            {dailyActivities.map((item) => (

              <article className="daily-card" key={item.title}>

                <div className="daily-icon">{item.icon}</div>



                <h3>{item.title}</h3>



                <span className="card-line" />



                <p>{item.text}</p>

              </article>

            ))}

          </div>

        </div>

      </section>



           {/* =====================================================
         TEMPLE TIMINGS
     ===================================================== */}
     <section className="calendar-timings">
       <div className="calendar-container">

         <div className="section-heading">
           <p className="calendar-label">TEMPLE INFORMATION</p>
           <h2>Temple Timings</h2>
           <p>
             Temple opening hours for devotees. Please check with the
             Trust for changes during festivals and special occasions.
           </p>
         </div>

         <div className="timings-grid">

           <article className="timing-card">
             <div className="timing-card-header">
               <span className="timing-icon">🪔</span>
               <h3>Monday – Friday</h3>
             </div>
             <div className="timing-divider" />
             <div className="timing-slot">
               <span className="timing-slot-label">Morning</span>
               <strong>6:00 AM – 12:00 PM</strong>
             </div>
             <div className="timing-slot">
               <span className="timing-slot-label">Evening</span>
               <strong>4:00 PM – 9:00 PM</strong>
             </div>
           </article>

           <article className="timing-card">
             <div className="timing-card-header">
               <span className="timing-icon">🪔</span>
               <h3>Saturday</h3>
             </div>
             <div className="timing-divider" />
             <div className="timing-slot">
               <span className="timing-slot-label">Morning</span>
               <strong>6:00 AM – 12:00 PM</strong>
             </div>
             <div className="timing-slot">
               <span className="timing-slot-label">Evening</span>
               <strong>4:00 PM – 9:30 PM</strong>
             </div>
           </article>

           <article className="timing-card">
             <div className="timing-card-header">
               <span className="timing-icon">🪔</span>
               <h3>Sunday</h3>
             </div>
             <div className="timing-divider" />
             <div className="timing-slot">
               <span className="timing-slot-label">Morning</span>
               <strong>6:00 AM – 1:00 PM</strong>
             </div>
             <div className="timing-slot">
               <span className="timing-slot-label">Evening</span>
               <strong>4:00 PM – 9:30 PM</strong>
             </div>
           </article>

         </div>
       </div>
     </section>

{/* =====================================================

          FESTIVAL CALENDAR

      ===================================================== */}

      <section className="festival-section">

        <div className="calendar-container">

          <div className="section-heading">

            <p className="calendar-label">SHIRDI SAI BABA</p>



            <h2>Festival Calendar</h2>



            <p>

              Important annual occasions celebrated in remembrance of Sai Baba

              and his spiritual teachings.

            </p>

          </div>



          <div className="festival-year">

            <span>2026</span>

          </div>



          <div className="festival-list">

            {festivals.map((festival, index) => (

              <article

                className={`festival-card ${

                  index % 2 === 1 ? "festival-card-reverse" : ""

                }`}

                key={festival.title}

              >

                <div className="festival-date">

                  <span>{festival.month}</span>

                  <strong>{festival.date}</strong>

                </div>



                <div className="festival-content">

                  <h3>{festival.title}</h3>



                  <span className="festival-line" />



                  <p>{festival.description}</p>

                </div>



                <div className="festival-symbol">

                  {index === 0 && "🌸"}

                  {index === 1 && "🌕"}

                  {index === 2 && "🕉️"}

                </div>

              </article>

            ))}

          </div>



          <p className="calendar-note">

            Festival dates shown above are based on the 2026 Shirdi Sai Baba

            festival calendar. Trust-specific programmes and timings may vary.

          </p>

        </div>

      </section>



      {/* =====================================================

          SPECIAL TEMPLE CELEBRATIONS

      ===================================================== */}

      <section className="special-section">

        <div className="calendar-container">

          <div className="section-heading">

            <p className="calendar-label">THROUGHOUT THE YEAR</p>



            <h2>Special Temple Celebrations</h2>



            <p>

              Special spiritual programmes and celebrations organised by the

              Trust.

            </p>

          </div>



          <div className="special-grid">

            {specialEvents.map((event) => (

              <article className="special-card" key={event.title}>

                <div className="special-icon">{event.icon}</div>



                <div>

                  <h3>{event.title}</h3>

                  <p>{event.text}</p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================

          UPCOMING EVENTS

      ===================================================== */}

      <section className="upcoming-section">

        <div className="calendar-container">

          <div className="section-heading">

            <p className="calendar-label">PLAN YOUR VISIT</p>



            <h2>Upcoming Events</h2>



            <p>

              Stay connected with upcoming temple activities and spiritual

              gatherings.

            </p>

          </div>



          <div className="upcoming-list">

            {upcomingEvents.map((event) => (

              <article className="upcoming-card" key={event.title}>

                <div className="upcoming-date">

                  <span>{event.month}</span>

                  <strong>{event.day}</strong>

                </div>



                <div className="upcoming-details">

                  <h3>{event.title}</h3>



                  <div className="upcoming-time">

                    <span>◷</span>

                    {event.time}

                  </div>



                  <p>{event.text}</p>

                </div>



                <div className="upcoming-arrow">→</div>

              </article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================

          EVENT MEMORIES

      ===================================================== */}

      <section className="memories-section">

        <div className="calendar-container">

          <div className="memories-grid">

            <div className="memories-content">

              <p className="calendar-label">DIVINE MOMENTS</p>



              <h2>

                Event Photos

                <span>& Videos</span>

              </h2>



              <p>

                Relive moments of prayer, celebration and togetherness through

                photographs and videos from our temple events.

              </p>



              <a href="/gallery" className="calendar-button">

                View Gallery

                <span>→</span>

              </a>

            </div>



            <div className="memories-placeholder">

              <img

                src="/images/calendar/image-1.jpg"

                alt="Sri Sai Tapovan Spiritual Trust Event"

              />

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================

          CTA

      ===================================================== */}

      <section className="calendar-cta">

        <div className="calendar-cta-inner">

          <div>

            <p className="calendar-label">WALK THE PATH</p>



            <h2>

              Join Us in Prayer,

              <br />

              Devotion & Service

            </h2>



            <p>

              Everyone is welcome to experience the peace and grace of Sai Baba.

            </p>

          </div>



          <div className="calendar-cta-buttons">

            <a href="/contact" className="calendar-primary-btn">

              Visit Us

            </a>



            <a href="/about" className="calendar-outline-btn">

              About the Trust

            </a>

          </div>

        </div>

      </section>

    </main>

  );

}
