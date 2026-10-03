export type GoalId='cancer_aware'|'weight_loss'|'diabetes_friendly';
export interface Goal{id:GoalId;title:string;shortName:string;tag:string;emoji:string;description:string}
export const GOALS:Goal[]=[{id:'cancer_aware',title:'Cancer-Aware Nutrition',shortName:'Cancer-Aware',tag:'Cancer-Aware',emoji:'🛡',description:'Make mindful food choices today to support long-term wellness and cell protection.'},{id:'weight_loss',title:'Weight Loss & Management',shortName:'Weight Loss',tag:'Weight Loss',emoji:'⚖️',description:'Maintain a healthy caloric deficit with nutrient-dense, high-satiety meals.'},{id:'diabetes_friendly',title:'Diabetes-Friendly & Glycemic Control',shortName:'Diabetes-Friendly',tag:'Diabetes-Friendly',emoji:'🩸',description:'Manage blood glucose with low-GI foods, steady fiber, and balanced macronutrients.'}];
export interface User{id:string;name:string;email:string;age?:number;heightCm?:number;weightLb?:number;gender?:string;primaryGoal?:string;isGuest?:boolean}
export interface Meal{id:string;category:string;name:string;calories:number;protein:number}
export interface FoodItem{id:string;foodName:string;ingredients:string;time:string;score:number;status:string;emoji:string;calories:string;protein:string;fiber:string;sodium:string;insights:string[];recommendation:string}
export interface ChatMessage{id:string;role:'USER'|'ASSISTANT';content:string;time:string}
