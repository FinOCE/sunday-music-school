import Required from "@/components/form/Required"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <h1>Request Lessons</h1>
      <br />

      <form>
        <p>
          Required fields are followed by <Required />.
        </p>
        <br />

        <section>
          <h2>Contact Information & Personal Details</h2>

          {/* Name */}
          <p>
            <label htmlFor="name">
              Name <Required />
            </label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              required
            />
          </p>

          {/* Email */}
          <p>
            <label htmlFor="email">
              Email Address <Required />
            </label>
            <br />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email address"
              required
            />
          </p>

          {/* Contact number */}
          <p>
            <label htmlFor="phone">
              Contact Number <Required />
            </label>
            <br />
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your contact number"
              required
            />
          </p>

          {/* Student */}
          <fieldset>
            <legend>
              The lessons will be for: <Required />
            </legend>

            <p>
              <input
                type="radio"
                id="self"
                name="student"
                value="self"
                required
              />
              <label htmlFor="self">Myself</label>
            </p>

            <p>
              <input
                type="radio"
                id="children"
                name="student"
                value="children"
                required
              />
              <label htmlFor="children">My child</label>
              <input
                type="text"
                name="child"
                placeholder="Children or child's name"
              />
            </p>
          </fieldset>
        </section>
        <br />

        <section>
          <h2>Experience & Interests</h2>

          <p>
            <label htmlFor="experience">
              How long have you played the piano? <Required />
            </label>
            <br />
            <input
              id="experience"
              name="experience"
              type="text"
              placeholder="Just starting, 6 months, 3 years, etc."
              required
            />
          </p>

          <p>
            <label htmlFor="formal">
              Have you taken lessons before? <Required />
            </label>
            <input type="checkbox" name="formal" id="formal" />
          </p>

          <p>
            <label htmlFor="interests">
              What type of music do you wish to learn? <Required />
            </label>
            <br />
            <textarea
              id="interests"
              name="interests"
              placeholder="What are your favourite genres or bands you'd like to learn?"
              required
            />
          </p>
        </section>
        <br />

        <section>
          <h2>Extra Information</h2>

          {/* Extra */}
          <p>
            <label htmlFor="extra">Anything extra you wish to share?</label>
            <br />
            <textarea
              id="extra"
              name="extra"
              placeholder="Additional information you'd like to share"
            />
          </p>

          {/* Referer */}
          <fieldset>
            <legend>
              How did you find us? <Required />
            </legend>

            <p>
              <input
                type="radio"
                id="search"
                name="referer"
                value="search"
                required
              />
              <label htmlFor="search">Online Search (Google, Bing, etc.)</label>
            </p>
            <p>
              <input
                type="radio"
                id="flyer"
                name="referer"
                value="flyer"
                required
              />
              <label htmlFor="flyer">Flyer</label>
            </p>
            <p>
              <input
                type="radio"
                id="wordofmouth"
                name="referer"
                value="wordofmouth"
                required
              />
              <label htmlFor="wordofmouth">Word of Mouth</label>
            </p>
            <p>
              <input
                type="radio"
                id="other"
                name="referer"
                value="other"
                required
              />
              <label htmlFor="other">Other</label>
            </p>
          </fieldset>
        </section>

        <input type="submit" value="Submit Request" />
      </form>
    </main>
  )
}
