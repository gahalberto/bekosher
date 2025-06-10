'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Calendar, Heart, ArrowRight } from 'lucide-react'
import Button from '../../ui/Button'
import Section from '../../ui/Section'
import Card from '../../ui/Card'

export default function CallToActionSection() {
  return (
    <Section background="gradient" className="text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-primary-800/30"></div>
      
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="text-6xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            יש לנו אור ירוק
            <span className="block text-gold-400">בואו נתחיל!</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            BeKosher יכול להפוך את החוויה הכשרה בברזיל. 
            <strong className="text-gold-300">אנחנו צריכים אותכם כדי להגשים את החלום הזה.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12"
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <Calendar className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">פגישה אישית</h3>
            <p className="text-primary-100 mb-6">
              בואו נדבר על ההזדמנות להשקיע ב-BeKosher. 
              נציג לכם את הפרויקט המלא ונענה על כל השאלות שלכם.
            </p>
            <Button variant="secondary" size="lg" className="w-full">
              אני רוצה לקבוע פגישה
            </Button>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
            <Download className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">הורד מצגת מלאה</h3>
            <p className="text-primary-100 mb-6">
              קבלו את המצגת הגביזנס המלאה עם כל הפרטים הטכניים, 
              נתוני השוק ותחזיות הרווחיות.
            </p>
            <Button variant="outline" size="lg" className="w-full bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600">
              הורד PDF
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 border-gold-400/30 backdrop-blur-sm">
            <div className="text-center">
              <Heart className="w-16 h-16 text-gold-400 mx-auto mb-6" />
              
              <h3 className="text-3xl font-serif font-bold mb-6 text-gold-300">
                איחוד בשם האמונה והמסורת
              </h3>
              
              <div className="space-y-4 text-lg text-white leading-relaxed">
                <p>
                  BeKosher הוא יותר מפלטפורמה טכנולוגית. הוא פתרון שמכבד את המסירות של 
                  המשפחות שרוצות לשמור על הכשרות בעולם מודרני.
                </p>
                
                <p>
                  עם התמיכה שלכם, אנחנו יכולים לבנות כלי שמחזק את הקהילה, 
                  מקל על החיים ומכבד את הערכים שחשובים לנו.
                </p>
                
                <div className="pt-6 border-t border-gold-400/30">
                  <p className="text-xl font-semibold text-gold-300">
                    בואו נבנה את העתיד הכשר של ברזיל יחד! 🤝
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="flex items-center gap-2">
              <Calendar size={20} />
              פגישה עכשיו
            </Button>
            <div className="flex items-center gap-2 text-primary-100">
              <ArrowRight size={16} className="rotate-180" />
              <span className="text-sm">או</span>
              <ArrowRight size={16} />
            </div>
            <Button variant="outline" size="lg" className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary-600">
              <Download size={20} />
              הורד מצגת
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
} 