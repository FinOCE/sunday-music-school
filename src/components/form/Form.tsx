import { useState } from "react"
import Required from "./Required"
import { SubmitButton } from "../Button"

export default function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [lessonsFor, setLessonsFor] = useState("")
  const [childName, setChildName] = useState("")

  const [experience, setExperience] = useState("")
  const [lessonsBefore, setLessonsBefore] = useState(false)
  const [interests, setInterests] = useState("")

  const [availability, setAvailability] = useState("")
  const [extra, setExtra] = useState("")
  const [onboarder, setOnboarder] = useState("")

  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        console.log({
          name,
          email,
          number,
          lessonsFor,
          childName,
          experience,
          lessonsBefore,
          interests,
          availability,
          extra,
          onboarder
        })

        // TODO: Send above as email with SendGrid
      }}
    >
      <p>
        <i>
          Required fields are followed by <Required />
        </i>
      </p>
      <br />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">
          Contact Information & Personal Details
        </h2>

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
            className="border-2 border-[#eee] rounded-lg p-3"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
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
            className="border-2 border-[#eee] rounded-lg p-3"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
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
            className="border-2 border-[#eee] rounded-lg p-3"
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </p>

        {/* Student */}
        <fieldset>
          <legend>
            The lessons will be for: <Required />
          </legend>

          <p className="flex gap-3" onClick={() => setLessonsFor("self")}>
            <input
              type="radio"
              id="self"
              name="student"
              value="self"
              required
              checked={lessonsFor === "self"}
            />
            <label htmlFor="self">Myself</label>
          </p>

          <p
            className="flex gap-3 items-center"
            onClick={() => setLessonsFor("child")}
          >
            <input
              type="radio"
              id="children"
              name="student"
              value="children"
              required
              checked={lessonsFor === "child"}
            />
            <label htmlFor="children">My child</label>
          </p>

          {lessonsFor === "child" && (
            <p>
              <input
                type="text"
                id="child"
                name="child"
                placeholder="Children or child's name"
                className="border-2 border-[#eee] rounded-lg p-3"
                value={childName}
                onChange={e => setChildName(e.currentTarget.value)}
              />
            </p>
          )}
        </fieldset>
      </section>
      <br />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Experience & Interests</h2>

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
            className="border-2 border-[#eee] rounded-lg p-3"
            value={experience}
            onChange={e => setExperience(e.currentTarget.value)}
          />
        </p>

        <p className="flex gap-3">
          <label htmlFor="formal">Have you taken lessons before?</label>
          <input
            type="checkbox"
            name="formal"
            id="formal"
            checked={lessonsBefore}
            onClick={() => setLessonsBefore(!lessonsBefore)}
          />
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
            className="border-2 border-[#eee] rounded-lg p-3 w-full max-w-[500px]"
            value={interests}
            onChange={e => setInterests(e.currentTarget.value)}
          />
        </p>
      </section>
      <br />

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Extra Information</h2>

        {/* Availability */}
        <p>
          <label htmlFor="availability">
            What times are you available for lessons on Sunday? <Required />
          </label>
          <br />
          <textarea
            id="availability"
            name="availability"
            placeholder="A time range to fit your schedule, such as 12-4pm"
            className="border-2 border-[#eee] rounded-lg p-3 w-full max-w-[500px]"
            value={availability}
            onChange={e => setAvailability(e.currentTarget.value)}
          />
        </p>

        {/* Extra */}
        <p>
          <label htmlFor="extra">Anything extra you wish to share?</label>
          <br />
          <textarea
            id="extra"
            name="extra"
            placeholder="Additional information you'd like to share"
            className="border-2 border-[#eee] rounded-lg p-3 w-full max-w-[500px]"
            value={extra}
            onChange={e => setExtra(e.currentTarget.value)}
          />
        </p>

        {/* Referer */}
        <fieldset>
          <legend>How did you find us?</legend>

          <p className="flex gap-3" onClick={() => setOnboarder("search")}>
            <input
              type="radio"
              id="search"
              name="referer"
              value="search"
              checked={onboarder === "search"}
            />
            <label htmlFor="search">Online Search (Google, Bing, etc.)</label>
          </p>
          <p className="flex gap-3" onClick={() => setOnboarder("flyer")}>
            <input
              type="radio"
              id="flyer"
              name="referer"
              value="flyer"
              checked={onboarder === "flyer"}
            />
            <label htmlFor="flyer">Flyer</label>
          </p>
          <p
            className="flex gap-3"
            onClick={() => setOnboarder("word of mouth")}
          >
            <input
              type="radio"
              id="wordofmouth"
              name="referer"
              value="wordofmouth"
              checked={onboarder === "word of mouth"}
            />
            <label htmlFor="wordofmouth">Word of Mouth</label>
          </p>
          <p className="flex gap-3" onClick={() => setOnboarder("other")}>
            <input
              type="radio"
              id="other"
              name="referer"
              value="other"
              checked={onboarder === "other"}
            />
            <label htmlFor="other">Other</label>
          </p>
        </fieldset>
      </section>

      <br />
      <SubmitButton>Submit Request</SubmitButton>
    </form>
  )
}
