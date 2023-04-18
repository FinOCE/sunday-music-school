import Button from "@/components/Button"
import DashSeparator from "@/components/DashSeparator"
import Form from "@/components/form/Form"
import Container from "@/components/layout/Container"
import { Inter, Satisfy } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <section>
        <Container>
          <div className="mx-[12.5vw] mt-[10vw] mb-[40vh]">
            <h1 className="text-5xl font-bold">Sunday Piano Lessons</h1>
            <p className="mt-3 mb-5 md:w-[500px] sm:w-full">
              Fuel your piano passion with lessons suited to all ages, levels,
              and musical interests right here in{" "}
              <strong>South Brisbane</strong>.
            </p>
            <div className="flex gap-2">
              <Button href="request-lessons">Request Lessons</Button>
              <Button href="request-lessons">Meet Yuma</Button>
            </div>
            <p className="text-right">Some cool photo here ig</p>
          </div>
        </Container>
      </section>
      <section>
        <div className="relative overflow-hidden w-[100vw]">
          <div className="absolute h-[100vh] w-[300vw] rounded-[100%] -left-[100vw] bg-black"></div>
          <Container>
            <div className="relative text-white mt-10 pt-10 px-[12.5vw] bg-black text-center">
              <h2 className="text-5xl sm:text-8xl font-bold mb-10 mt-10">
                Music Is
                <span className="text-black">.</span>
                <br />
                Powerful.
              </h2>
              <p>
                There are few things more rewarding and fulfilling than learning
                to play an instrument. Regardless of age, everyone can
                appreciate beautiful music. INCLUDE REASON WHY PIANO IS EPIC
              </p>

              <div className="my-10">
                <Button href="request-lessons" invert>
                  Request Lessons
                </Button>
              </div>
              <DashSeparator invert center />
              <br />
              <br />
              <br />
            </div>
          </Container>
        </div>
      </section>
      <section>
        <div className="bg-[#eee]">
          <Container>
            <h2 className="px-[12.5vw] mt-[80px] mb-10 text-center text-5xl font-black">
              Meet Your Teacher
            </h2>
            <div className="flex max-sm:flex-col md:flex-row items-center gap-10 mb-[80px] px-[12.5vw]">
              <div className="w-[100%] flex flex-col gap-3">
                <p>
                  Get all ego here and say how you're so good and so cool aw man
                  sheeeeesh
                </p>
                <p>I mean REALLY get into it. Really SELL it here!</p>
                <p>BIG TIME</p>
                <p>HUUUUUUUUUUUGE</p>
                <p className="text-right">
                  <span className={`${satisfy.className} text-4xl`}>
                    - Yuma
                  </span>
                </p>
              </div>
              <div className="w-[100%] flex flex-col items-center">
                <div className="w-full max-w-[300px] h-[300px] bg-black text-center text-white rounded-xl">
                  Image of you here
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <Container>
          <div className="px-[12.5vw]">
            <h2 className="px-[12.5vw] mt-[80px] mb-10 text-center text-5xl font-black">
              Request Lessons
            </h2>
            <p>STILL NEED TO MAKE THIS CLEAN (and simplify?)</p>
            <br />
            <br />
            <Form />
            <br />
            <br />
          </div>
        </Container>
      </section>
    </main>
  )
}
