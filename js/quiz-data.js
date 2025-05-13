const quizData = {
    questions: [
        {
            id: 1,
            text: "What is a microaggression?",
            options: [
                {
                    text: "An obvious act of discrimination",
                    isCorrect: false
                },
                {
                    text: "A subtle, often unintentional expression of bias or prejudice",
                    isCorrect: true
                },
                {
                    text: "A type of workplace harassment",
                    isCorrect: false
                },
                {
                    text: "A formal complaint about workplace behavior",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! Microaggressions are subtle, often unintentional expressions of bias or prejudice.",
                incorrect: "Not quite. Microaggressions are subtle, often unintentional expressions of bias or prejudice."
            }
        },
        {
           id: 2,
            text: "What is the most effective way to respond to a microaggression?",
            options: [
                {
                    text: "Ignore it to avoid conflict",
                    isCorrect: false
                },
                {
                    text: "Respond with anger to make your point",
                    isCorrect: false
                },
                {
                    text: "Address it calmly and professionally while maintaining a constructive dialogue",
                    isCorrect: true
                },
                {
                    text: "Report it immediately to HR",
                    isCorrect: false
                }
            ],
            feedback: {
                correct: "Correct! Addressing microaggressions calmly and professionally while maintaining a constructive dialogue is the most effective approach.",
                incorrect: "Not quite. The most effective approach is to address it calmly and professionally while maintaining a constructive dialogue."
            }
        },
        {
            id: 3,
            text: "You apply for a leadership role and someone says, <i>You're really confident for a woman.</i> Why is this comment problematic?",
            options: [
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
                },
                {
                    text: "It reinforces gender stereotypes",
                    isCorrect: true
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
                    text: "Microassault",
                    isCorrect: false
                },
                {
                    text: "Microinvalidation",
                    isCorrect: false
                },
                {
                    text: "Microinsult",
                    isCorrect: true
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
            text: "What is the purpose of addressing microaggressions?",
            options: [
                {
                    text: "To punish those who commit microaggressions",
                    isCorrect: false
                },
                {
                    text: "To create conflict in the workplace",
                    isCorrect: false
                },
                {
                    text: "To document workplace issues",
                    isCorrect: false
                },
                {
                    text: "To create more inclusive environments through education and growth",
                    isCorrect: true
                }
            ],
            feedback: {
                correct: "Correct! The purpose is to create more inclusive environments through education and growth, not blame or shame.",
                incorrect: "Not quite. The purpose is to create more inclusive environments through education and growth, not to punish or create conflict."
            }
        }
    ]
};
