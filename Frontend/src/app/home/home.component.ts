import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class Home {
  features = [
    {
      icon: '📘',
      title: 'Video Learning Hub',
      description: 'HD video lessons for all subjects from LKG to Class 12 with multilingual support',
      color: '#e8f0fe'
    },
    {
      icon: '💬',
      title: 'AI Mentor Bots',
      description: '150+ subject-specific mentor bots available 24/7 for personalized guidance',
      color: '#f3e8ff'
    },
    {
      icon: '🎯',
      title: 'Mock Tests',
      description: 'Weekly auto-generated tests with instant feedback and performance tracking',
      color: '#e6f4ea'
    },
    {
      icon: '🏆',
      title: 'Gamification',
      description: 'Earn XP points, badges, and compete on leaderboards to stay motivated',
      color: '#fff8e1'
    },
    {
      icon: '🧭',
      title: 'Career Guidance',
      description: 'AI-powered career suggestions based on interests, skills, and performance',
      color: '#ffebee'
    },
    {
      icon: '⭐',
      title: 'Premium Features',
      description: 'Advanced learning tools, certificates, and career mentorship for ₹99/month',
      color: '#fff3e0'
    }
  ];
   paths = [
    {
      title: 'For Students',
      description: 'Complete learning platform from LKG to Class 12',
      benefits: [
        'HD Video Lessons',
        'AI Mentor Bots',
        'Mock Tests',
        'Gamification',
        'Career Guidance'
      ],
      color: '#e6f0ff'
    },
    {
      title: 'For Parents',
      description: 'Monitor your child\'s progress and support their learning',
      benefits: [
        'Child Progress Tracking',
        'Performance Reports',
        'Learning Analytics',
        'Communication Tools'
      ],
      color: '#e8f8f0'
    },
    {
      title: 'For Teachers',
      description: 'Enhance your teaching with AI-powered tools',
      benefits: [
        'Content Management',
        'Student Analytics',
        'Assessment Tools',
        'Parent Communication'
      ],
      color: '#f7f0ff'
    }
  ];
}
