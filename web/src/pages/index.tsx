import Button from "@/components/Button"
import DashSeparator from "@/components/DashSeparator"
import Footer from "@/components/Footer"
import GradientText from "@/components/GradientText"
import Head from "@/components/Head"
import NoteRain from "@/components/NoteRain"
import Form from "@/components/form/Form"
import Container from "@/components/layout/Container"
import { Inter, Satisfy } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] })

export default function Home() {
  const useForm = false

  return (
    <>
      <Head />
      <main className={`${inter.className}`}>
        <section className="pb-10">
          <Container>
            <div className="px-[12.5vw] pt-[10vw] pb-[15vh] flex flex-col lg:flex-row items-center justify-between relative">
              <div className="bg-gradient-to-t lg:bg-gradient-to-r from-blue-600 from-[25%] lg:from-[0%] via-yellow-500 via-[50%] lg:via-[16%] via-green-500 via-[75%] lg:via-[33%] to-transparent to-[100%] lg:to-[50%] w-[100%] h-[110%] absolute -bottom-[30%] lg:top-0 left-0 opacity-[0.3]" />
              <NoteRain />
              <div className="z-10">
                <h1 className="text-5xl font-bold">Learn to Play Piano!</h1>
                <p className="mt-3 mb-5 md:w-[500px] sm:w-full">
                  Fuel your piano passion with lessons suited to all ages,
                  levels, and musical interests right here in{" "}
                  <strong>South Brisbane</strong>.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      document
                        .getElementById("request")!
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                  >
                    Request Lessons
                  </Button>
                  <Button
                    onClick={() => {
                      document
                        .getElementById("teacher")!
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                  >
                    Meet Yuma
                  </Button>
                </div>
              </div>
              <div className="max-w-[400px] my-10 dark:hidden">
                <div
                  style={{
                    boxShadow: "0 0 20px 20px #fff inset"
                  }}
                  className="overflow-hidden rounded-[20%]"
                >
                  <img src="/ai_piano.png" className="-z-10 relative" />
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="-mt-10">
          <div className="relative overflow-hidden">
            <div className="absolute h-[100vh] w-[300vw] rounded-[100%] -left-[100vw] bg-black"></div>
            <Container>
              <div className="relative text-white mt-10 pt-10 px-[12.5vw] bg-black text-center">
                <h2 className="text-5xl sm:text-8xl font-bold mb-10 mt-10">
                  Music Is
                  <span className="inline-block w-4" />
                  <br />
                  <GradientText>Powerful.</GradientText>
                </h2>
                <div className="flex flex-col gap-3">
                  <p>
                    There are few things more rewarding and fulfilling than
                    learning to play an instrument. Regardless of age, everyone
                    can appreciate beautiful music.
                  </p>
                  <p>
                    Expressing one's self on the piano is the most precious life
                    skill anybody could have. The piano is the most versatile
                    instrument for speaking the language of music. This
                    instrument will give you the ability to express oneself on a
                    grand level.
                  </p>
                </div>

                <div className="my-10">
                  <Button
                    onClick={() => {
                      document
                        .getElementById("request")!
                        .scrollIntoView({ behavior: "smooth", block: "start" })
                    }}
                    invert
                  >
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
        <section id="teacher">
          <div className="bg-[#eee]">
            <Container>
              <h2 className="px-[12.5vw] mt-[80px] mb-10 text-center text-5xl font-black">
                Meet Your Teacher
              </h2>
              <div className="flex max-sm:flex-col md:flex-row-reverse items-center gap-10 mb-[80px] px-[12.5vw]">
                <div className="w-[100%] flex flex-col gap-3">
                  <p>
                    What I love about teaching is giving people the ability to
                    make music. I think the best gift for anybody is the ability
                    to express themselves with music. When I see a student
                    enjoying playing music, I think to myself,{" "}
                    <i>
                      "another person in the world who has found their passion
                      for music."
                    </i>
                  </p>
                  <p>
                    I love being a piano teacher and good music is what I strive
                    for. Creating good music takes patience and hard work,
                    however my methodology involves fostering the student’s
                    passion, not constraining it. I purely want what the student
                    wants, whether that is playing for music examinations,
                    leisure or playing piano in a band! As mentioned before,
                    good music takes patience and hard work. What I strive for
                    is{" "}
                    <strong>
                      making the process of practice a pleasurable experience
                    </strong>
                    . Unfortunately in life, you have to endure the hard to get
                    to the easy. I aim to make this process meaningful, and most
                    importantly, fun!
                  </p>
                  <p className="text-right">
                    <span className={`${satisfy.className} text-4xl`}>
                      - Yuma
                    </span>
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg">
                    <img src="/yuma.jpg" />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
        <div className="h-3 bg-gradient-to-r from-blue-600 via-yellow-500 via-green-500 to-indigo-400" />
        <section id="request">
          <Container>
            <div className="px-[12.5vw]">
              <h2 className="mt-[80px] mb-10 text-center text-5xl font-black">
                Request Lessons
              </h2>
              {useForm ? (
                <>
                  <p>
                    Ready to get started? Please fill out the form below to
                    express your interest in receiving lessons. Whether or not
                    lessons will be available at a given time is subject to
                    change, so please make sure to give a time range that works
                    for you, and we can follow up if need be. We look forward to
                    see you soon!
                  </p>
                  <br />
                  <div className="mb-[80px]">
                    <Form />
                  </div>
                </>
              ) : (
                <>
                  <p>
                    Ready to get started? Please contact Yuma through one of the
                    methods below to express your interest in receiving lessons.
                    Whether or not lessons will be available at a given time is
                    subject to change, so please make sure to give a time range
                    that works for you, and we can follow up if need be. We look
                    forward to see you soon!
                  </p>
                  <br />
                  <div className="flex flex-col gap-2 items-center mb-10">
                    <p>
                      Email:{" "}
                      <a
                        href="mailto:yumasteve882@gmail.com"
                        className="text-blue-600 font-bold"
                      >
                        yumasteve882@gmail.com
                      </a>
                    </p>
                    <p>
                      Mobile:{" "}
                      <a
                        href="tel:0467221668"
                        className="text-blue-600 font-bold"
                      >
                        0467 221 668
                      </a>
                    </p>
                  </div>
                </>
              )}
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    </>
  )
}
