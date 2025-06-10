'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Eye, TrendingUp, Users, Award, Building } from 'lucide-react'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function ImpactSection() {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-blue-500" />,
      title: "נראות למותג",
      description: "המותג שלכם יוצג בצורה מרכזית בפלטפורמה הכשר המובילה בברזיל"
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: "חיבור לקהילה",
      description: "שותפות עם קהילה פעילה שמחפשת ומעריכה ערכי איכות ואמינות"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "החזר על השקעה",
      description: "פלטפורמה עם פוטנציאל להפוך לבלתי נמנעת בחיי היום יום של הקהילה"
    },
    {
      icon: <Award className="w-8 h-8 text-gold-500" />,
      title: "הכרה חברתית",
      description: "יותר מהשקעה: תמיכה בפרויקט שמשפר איכות חיים"
    },
    {
      icon: <Building className="w-8 h-8 text-red-500" />,
      title: "יכולות שיווק",
      description: "רכישת מקום מותג איכותי ומובן לכל הקהילה"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "אימפקט חברתי",
      description: "תמיכה בקהילה שרוצה לשמור על מסורת ויש לה צרכים מיוחדים"
    }
  ]

  return (
    <Section background="light">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6"
        >
          מה המשקיעים <span className="text-primary-600">מרוויחים</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          הצטרפו למותגי הפרימיום שתומכים בפרויקט החדשני הזה ומרוויחים נראות, 
          חיבור לקהילה והכרה חברתית.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="text-center h-full hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16"
      >
        <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              💡 יותר מסתם השקעה
            </h3>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed mb-6">
              אתם משקיעים בפרויקט שיכול לשנות את החוויה הכשרה בברזיל, 
              להקל על המשפחות ולחזק את הקהילה.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-gold-300">
                <Award className="w-5 h-5" />
                <span className="font-semibold">השקעה בעלת משמעות</span>
              </div>
              <div className="flex items-center gap-2 text-gold-300">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">אימפקט חברתי אמיתי</span>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
} 