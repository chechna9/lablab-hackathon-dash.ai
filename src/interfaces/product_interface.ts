import { FeedbackInterface } from "./feedback_interface";

export interface ProductInterface {
    name: string;
    feedbacks: FeedbackInterface[];
}