"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, Car } from "lucide-react"

export function SurveySection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: 0,
      question: "How often do you wash your car?",
      options: ["Weekly", "Monthly", "Every few months", "Rarely"],
    },
    {
      id: 1,
      question: "What's your biggest car care concern?",
      options: ["Paint protection", "Interior cleanliness", "Maintaining value", "Time constraints"],
    },
    {
      id: 2,
      question: "Have you ever had professional detailing?",
      options: ["Yes, regularly", "Yes, occasionally", "Once or twice", "Never"],
    },
    {
      id: 3,
      question: "What's most important to you?",
      options: ["Long-lasting protection", "Immediate visual impact", "Convenience", "Value for money"],
    },
  ]

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value })
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const getRecommendation = () => {
    const answerValues = Object.values(answers)
    if (answerValues.includes("Paint protection") || answerValues.includes("Long-lasting protection")) {
      return "Ceramic Coating Protection"
    }
    if (answerValues.includes("Interior cleanliness")) {
      return "Complete Interior Detailing"
    }
    if (answerValues.includes("Never") || answerValues.includes("Rarely")) {
      return "Premium Full Detail"
    }
    return "Paint Correction & Polishing"
  }

  const resetSurvey = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Car className="w-6 h-6 text-amber-400" />
            <span className="text-amber-400 font-medium uppercase tracking-wider text-sm">Quick Survey</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-zinc-100 mb-6">
            Find Your Perfect
            <span className="block gradient-text">Service</span>
          </h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Answer a few quick questions and we'll recommend the ideal detailing service for your needs.
          </p>
        </div>

        <Card className="glass-effect border-zinc-700">
          <CardContent className="p-8">
            {!showResults ? (
              <div className="space-y-8">
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-zinc-400">
                    <span>
                      Question {currentQuestion + 1} of {questions.length}
                    </span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2">
                    <div
                      className="bg-amber-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-zinc-100">{questions[currentQuestion].question}</h3>
                  <RadioGroup value={answers[currentQuestion] || ""} onValueChange={handleAnswer} className="space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <RadioGroupItem value={option} id={`option-${index}`} className="border-zinc-600" />
                        <Label
                          htmlFor={`option-${index}`}
                          className="text-zinc-300 cursor-pointer hover:text-zinc-100 transition-colors"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-900"
                  size="lg"
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Get Recommendation"}
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-8">
                <div className="flex justify-center">
                  <CheckCircle className="w-16 h-16 text-green-400" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-zinc-100">Perfect Match Found!</h3>
                  <p className="text-zinc-300">Based on your answers, we recommend:</p>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-semibold gradient-text mb-2">{getRecommendation()}</h4>
                    <p className="text-zinc-300">
                      This service is tailored to your specific needs and car care preferences.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-zinc-900">Book This Service</Button>
                  <Button
                    variant="outline"
                    onClick={resetSurvey}
                    className="border-zinc-600 text-zinc-300 bg-transparent"
                  >
                    Take Survey Again
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
