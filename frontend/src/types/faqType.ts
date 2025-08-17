export interface FaqQuestion {
    question: string;
    answer: string;
    additionalInfoTitle: string | undefined;
    additionalInfoText: string | undefined;
}

export interface Faq {
    title: string;
    questions: FaqQuestion[];
}