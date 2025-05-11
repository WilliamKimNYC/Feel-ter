const quizData = {
    questions: [
        {
            id: 1,
            text: "A coworker says during a team meeting, <i>Wow, you're really articulate!</i> What kind of microaggression might this be?",
            options: [
                {
                    text: "Microinsult",
                    isCorrect: true
                },
                {
                    text: "Microassault",
                    isCorrect: false
                },
                {
                    text: "Microinvalidation",
                    isCorrect: false
                },
                {
                    text: "A simple compliment",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! It sounds like a compliment, but implies surprise that someone from your background is well-spoken — a classic microinsult.",
                incorrect: "Not quite. This is a microinsult — it hides a stereotype under the disguise of praise."
            }
        },
        {
            id: 2,
            text: "Someone says, <i>I don't see race. We're all just people.</i> What kind of microaggression is this?",
            options: [
                {
                    text: "Microinsult",
                    isCorrect: false
                },
                {
                    text: "Microassault",
                    isCorrect: false
                },
                {
                    text: "Microinvalidation",
                    isCorrect: true
                },
                {
                    text: "A compliment about equality",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! This is a microinvalidation because it erases the lived experience of racial identity.",
                incorrect: "Not quite. It's a microinvalidation — ignoring race can dismiss someone's identity and challenges."
            }
        },
        {
            id: 3,
            text: "You apply for a leadership role and someone says, <i>You're really confident for a woman.</i> Why is this comment problematic?",
            options: [
                {
                    text: "It reinforces gender stereotypes",
                    isCorrect: true
                },
                {
                    text: "It's openly hostile",
                    isCorrect: false
                },
                {
                    text: "It's just awkward phrasing",
                    isCorrect: false
                },
                {
                    text: "It's a microassault",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! This is a microinsult that reinforces a stereotype that women aren't expected to be confident.",
                incorrect: "Not quite. This is a microinsult because it reinforces gender-based assumptions about leadership."
            }
        },
        {
            id: 4,
            text: "A classmate says, <i>Can you help me with the math homework? People from your country are always good at this stuff.</i> What kind of microaggression is this?",
            options: [
                {
                    text: "Microinsult",
                    isCorrect: true
                },
                {
                    text: "Microassault",
                    isCorrect: false
                },
                {
                    text: "Microinvalidation",
                    isCorrect: false
                },
                {
                    text: "Positive stereotyping",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! This is a microinsult — it's stereotyping disguised as a compliment.",
                incorrect: "Not quite. Even though it sounds positive, it's a microinsult because it reduces a person to a stereotype."
            }
        },
        {
            id: 5,
            text: "A manager keeps mispronouncing your name and says, <i>It's just too hard to say.</i> What type of microaggression is this?",
            options: [
                {
                    text: "Microinsult",
                    isCorrect: false
                },
                {
                    text: "Microassault",
                    isCorrect: false
                },
                {
                    text: "Microinvalidation",
                    isCorrect: true
                },
                {
                    text: "An honest mistake",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! This is a microinvalidation because it dismisses your identity by refusing to respect your name.",
                incorrect: "Not quite. This is a microinvalidation — ignoring someone's name erases part of who they are."
            }
        }
    ]
}; 