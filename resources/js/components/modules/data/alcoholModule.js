export const alcoholModuleSlides = {
  // slide 1 and 2 (combined to fit the design)
  0: {
    slide_type: 'intro',
    moduleImage: 'images/thumbnail/alcohol_thumbnail.jpg',
    moduleTitle: 'Alcohol',
    goal: 'In this module we will discuss what alcohol use among college students looks like, what alcohol dependency is, how it can affect your health and wellness, and how you can choose to drink responsibly and make healthier choices.',
    definition: 'Alcohol is a liquid that is produced by the natural brew of sugars and is the main intoxicant in beer, wine, hard liquor, and other drinks.',
    estimatedCompletion: '15 minutes'
  },
  // slide 6
  1: {
    slide_type: 'quiz',
    header: {
      title: null,
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s06_01.png',
          alt: 'quiz',
          position: 'top',
          width: 'half'
        }
      },
      questions: {
        0: {
          showResponse: false,
          question: 'Taking two shots of tequila is the same as which of the following?',
          options: {
            0: {
              isAnswer: false,
              text: 'Four cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.jpg',
                  alt: 'alcohol comparison'
                }
              }
            },
            1: {
              isAnswer: false,
              text: 'Three cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.jpg',
                  alt: 'alcohol comparison'
                }
              }
            },
            2: {
              isAnswer: true,
              text: 'Two cans of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'You are correct!!! one standard shot (1.5oz) is the same as one can of beer (12oz)',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              text: 'One can of beer (12oz each)',
              img: {
                src: null,
                alt: null
              },
              response: {
                text: 'Nice try! But remember, one standard shot (1.5oz) <b>is the same as</b> one can of beer (12oz)',
                img: {
                  src: 'images/alcoholModule/alcohol_s06_02.jpg',
                  alt: 'alcohol comparison'
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 7
  2: {
    slide_type: 'quiz',
    header: {
      title: null,
      text: null
    },
    content: {
      images: null,
      questions: {
        0: {
          showResponse: false,
          question: 'Let’s see what you think - which of these pours of Whiskey in a 7oz glass is a standard drink size?',
          options: {
            0: {
              isAnswer: true,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_01.png',
                alt: 'glass filled with alcohol one fith\'s of container'
              },
              response: {
                text: '1.5oz<br>Great job! This is one standard drink – 1.5 oz of 40% liquor!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            1: {
              isAnswer: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_02.png',
                alt: 'glass filled with alcohol two fith\'s of container'
              },
              response: {
                text: '2oz<br>Good try, but this is more than one standard drink!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            2: {
              isAnswer: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_03.png',
                alt: 'glass filled with alcohol two fourth\'s of container'
              },
              response: {
                text: '3oz<br>Nice guess, but actually, this is the same as two standard drinks!',
                img: {
                  src: null,
                  alt: null
                }
              }
            },
            3: {
              isAnswer: false,
              text: null,
              img: {
                src: 'images/alcoholModule/alcohol_s07_04.png',
                alt: 'glass filled with alcohol three fourth\'s of container'
              },
              response: {
                text: '4.5oz<br>Whoa, hold your horses there!<br>This is actually 4.5 oz – and that equals <u>three</u> standard drinks!!',
                img: {
                  src: null,
                  alt: null
                }
              }
            }
          }
        }
      }
    }
  },
  // slide 13
  3: {
    slide_type: 'cardFlip',
    header: {
      title: 'Drinking categories',
      text: null
    },
    content: {
      paragraph: {
        0: 'Have you ever seen anyone drink more than what they can handle? Have you seen this individual do that more than once?',
        1: 'It might be important to be aware of what the different categories of drinking are.',
        2: '<b>Flip the cards to see.</b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_01.png',
              alt: 'beer and red wine',
              caption: 'Moderate Drinking'
            },
            question: null
          },
          back: {
            description: 'Having one or fewer drinks per day for women, and two or fewer drinks per day for men. Typically, moderate drinkers don’t drink to get drunk.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_02.png',
              alt: 'glass with lime',
              caption: 'Binge Drinking'
            },
            question: null
          },
          back: {
            description: ' For women, 4 drinks or more in a 2-hour period, and 5 drinks or more for men in a 2-hour period.'
          }
        },
        2: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s13_03.png',
              alt: 'many different types of alcohol',
              caption: 'Heavy Drinking'
            },
            question: null
          },
          back: {
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pretium tortor, vitae aliquam urna. Vivamus commodo suscipit risus, sed sagittis tellus. Nam at tortor cursus, semper risus ac, lacinia odio. Morbi vitae mollis diam.'
          }
        }
      }
    }
  },
  // slide 14
  4: {
    slide_type: 'video',
    header: {
      title: 'What type of drinker is Sarah?',
      text: 'Watch this video to hear a story about Sarah’s week. Pay attention, because you will be quizzed about her drinking after.'
    },
    content: {
      video_id: 'JfsqxIEQk6U',
      caption: null
    }
  },
  // slide 16
  5: {
    slide_type: 'video',
    header: {
      title: 'Binge Drinking',
      text: 'Please watch the video below.'
    },
    content: {
      video_id: '5jNEVGj6gS0',
      caption: 'Drinking with friends at parties can be loads of fun – but if you\'re feeling like you\'re on the slippery binge road (5+ drink in 2 hours for guys or 4+ drinks in 2 hours for gals), then it\'s time to take a break from the booze!'
    }
  },
  // slide 18
  6: {
    slide_type: 'cardFlip',
    header: {
      title: 'Don\'t become a statistic!',
      text: 'Flip the cards below to find out some statistics about alcohol use on college campuses.'
    },
    content: {
      paragraph: {
        0: '<b>Drinking irresponsibly can <em>negatively</em> affect your health, your relationships, your academic performance, and your future.<b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_01.png',
              alt: 'person drinking beer',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Out of the students who drink, <b><em>half will binge drink multiple times</em></b> before they graduate.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_02.png',
              alt: 'tipsy caution sign',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Drunken students are responsible for <b><em>97,000</em></b> sexual assaults every year.'
          }
        },
        2: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_03.png',
              alt: '5 shadows of people standing straight',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b><em>Four out of every five</em></b> students drink while enrolled at university.'
          }
        },
        3: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_04.png',
              alt: '2 shadows of people',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Universities report <b><em>690,000</em></b> alcohol related student assaults annually.'
          }
        },
        4: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s18_05.png',
              alt: 'frustrated person staring at his laptop',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b><em>25% of students report</em></b> serious academic consequences of alcohol abuse, including poor grades, suspension, and expulsion.'
          }
        }
      }
    }
  },
  // slide 19
  7: {
    slide_type: 'info',
    header: {
      title: 'Health benefits of drinking responsibly',
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s19_01.jpg',
          alt: 'one dollar bills',
          position: null,
          width: null
        },
        1: {
          src: 'images/alcoholModule/alcohol_s19_02.jpg',
          alt: 'person body turned and tilted head staring',
          position: null,
          width: null
        },
        2: {
          src: 'images/alcoholModule/alcohol_s19_03.jpg',
          alt: 'person with shades smiling at camera',
          position: null,
          width: null
        },
        3: {
          src: 'images/alcoholModule/alcohol_s19_04.jpg',
          alt: 'person covering eyes with strawberries smiling',
          position: null,
          width: null
        }
      },
      paragraph: {
        0: 'Drinking in moderation is important for a healthy mind and body. Cutting back how much or how often we drink can make a big difference!',
        1: 'If you drink several days a week, know that alcohol-free days can be beneficial!'
      }
    }
  },
  // slide 21
  8: {
    slide_type: 'info',
    header: {
      title: 'Better Sleep',
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s21_01.jpg',
          alt: 'person sleeping on couch with comfy blanket',
          position: 'bottom',
          width: null
        }
      },
      paragraph: {
        0: 'While drinking may help us fall asleep, it actually leads to a lowered quality of sleep throughout the night. ',
        1: 'Drinking can block restorative sleep (known as REM sleep), cause increased bathroom trips during the night, and ultimately lead to restless sleep.'
      }
    }
  },
  // slide 22
  9: {
    slide_type: 'info',
    header: {
      title: 'Better Academic Performance',
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s22_01.PNG',
          alt: 'alcohol infographic on being a factor for academic problems',
          position: null,
          width: null
        }
      },
      paragraph: null
    }
  },
  // slide 23
  10: {
    slide_type: 'info',
    header: {
      title: 'Responsible Drinking Checklist',
      text: null
    },
    content: {
      paragraph: {
        0: 'Eat before you drink.',
        1: 'Snack while you drink.',
        2: 'For every alcoholic drink that you consume, have a glass of water in between.',
        3: 'Know how much you\'re drinking!',
        4: 'Review what a standard drink is',
        5: 'Make a plan! Before drinking, decide how much you plan to drink and commit.',
        6: 'Share your plan with those you plan on going out with...',
        7: '...and always look out for each other'
      }
    }
  },
  // slide 24
  11: {
    slide_type: 'info',
    header: {
      title: 'Responsible Drinking Checklist',
      text: 'Many people tend to worry about how people will react to them if they refuse a drink at a party or other social settings. But remember…YOU are in control!'
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s24_01.jpg',
          alt: 'no alcohol sticker',
          position: null,
          width: null
        },
        1: {
          src: 'images/alcoholModule/alcohol_s24_02.jpg',
          alt: 'no sign',
          position: null,
          width: null
        }
      },
      paragraph: {
        0: '<h3><b>If you are offered a drink, here are ways to say no:</b></h3><ul>',
        1: '<li>Thanks, but I’ve got a ton of work to do later.</li>',
        2: '<li>No thanks, I’m taking medication that I cannot drink with.</li>',
        3: '<li>I’m driving tonight.” (You can also offer to be the designated driver!</li>',
        4: '<li>I’d rather get a soda, thanks.</li>',
        5: '<li>I have a game/practice tomorrow.</li>',
        6: '<li>I’m OK for now!” (You can BYOC (bring your own cup) and keep it filled with something other than alcohol!</li><ul>'
      }
    }
  },
  // slide 25
  12: {
    slide_type: 'cardFlip',
    header: {
      title: 'Should I take an Uber?',
      text: null
    },
    content: {
      paragraph: {
        0: 'It\'s time to sober up and look at the facts. Drinking and driving is no joke. The #1 cause of death among college students is car accidents.',
        1: 'It\'s ok to drink, just don\t get behind the wheel or allow others to drive if they\'ve been drinking. Consider how long it would take to sober up after drinking, or better yet – take an Uber!',
        2: '<b>Flip the card below to read about drunk driving in California</b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s25_01.png',
              alt: 'don\'t drink and drive sign',
              caption: null
            },
            question: null
          },
          back: {
            description: '<b>Drunk Driving in California</b><ul><li>It is illegal to drink with a Blood Alcohol Concentration (BAC) level above .08% in California (and in all states).</li><li>However, a <b>BAC below .08% does not mean</b> that it is safe or legal to drive - you can still risk a DUI.</li><li>There is a <b>ZERO TOLERANCE</b> policy if you are <b>under 21</b>. Any amount of alcohol in your blood can lead to a DUI.</li></ul>'
          }
        }
      }
    }
  },
  // slide 26
  13: {
    slide_type: 'info',
    header: {
      title: 'Sobering Up Takes Time!',
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s26_01.png',
          alt: 'wine infographic cartoon',
          position: 'bottom',
          width: null
        }
      },
      paragraph: {
        0: 'Many factors affect how your body absorbs alcohol into the blood - such as how much and how fast you drink, your weight, gender, and if you had food in your stomach.',
        1: 'There is no way to speed up the rate your body metabolizes/gets rid of alcohol after drinking (nope, not that cup of coffee either!).',
        2: 'A general rule is that it will burn off <b><u>about</u> 1 standard drink per 1 to 1 ½ hours.</b>'
      }
    }
  },
  // slide 28
  14: {
    slide_type: 'info',
    header: {
      title: 'Healthy Alternatives',
      text: null
    },
    content: {
      images: null,
      paragraph: {
        0: 'Sometimes we drink to feel connected with friends, to numb emotions and thoughts, or deal with stress.',
        1: 'But drinking isn\'t the only way to make us feel good or help us tackle life\'s challenges! ',
        2: 'There are many healthy alternatives to boost health and wellness. Research shows physical, mental and social activities can improve our overall wellness.'
      }
    }
  },
  // slide 29
  15: {
    slide_type: 'info',
    header: {
      title: 'Physical Activities',
      text: null
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s29_01.jpg',
          alt: 'two people running next to a lake',
          position: 'bottom',
          width: null
        }
      },
      paragraph: {
        0: 'Our bodies produce the same hormone (known as dopamine) during exercise as we do while drinking. This means that we can get an awesome high from a trip to the gym or a soccer match!',
        1: 'Working out is also a great stress reliever. Try going for a run to relieve stress instead of reaching for a glass. Your mind and body will thank you later on!'
      }
    }
  },
  // slide 30
  16: {
    slide_type: 'info',
    header: {
      title: 'Social Activities',
      text: 'Hanging out with friends can be super fun, even without alcohol. Going out to the movies, meeting up for an amazing sunset hike; or checking out the latest art show can be equally memorable!'
    },
    content: {
      images: {
        0: {
          src: 'images/alcoholModule/alcohol_s30_01.jpg',
          alt: 'friends holding each other on top of a hill',
          position: null,
          width: null
        },
        1: {
          src: 'images/alcoholModule/alcohol_s30_02.jpg',
          alt: 'people putting hands in the middle for teamwork',
          position: 'bottom',
          width: null
        }
      },
      paragraph: {
        0: 'Our bodies produce the same hormone (known as dopamine) during exercise as we do while drinking. This means that we can get an awesome high from a trip to the gym or a soccer match!',
        1: 'Joining a team or an organization can lead to meaningful connections and friendships! The Matador Involvement Center has many options.'
      }
    }
  },
  // slide 31
  17: {
    slide_type: 'cardFlip',
    header: {
      title: 'Mind-Body Activities',
      text: null
    },
    content: {
      paragraph: {
        0: 'By practicing mindfulness and yoga you can improve mood, reduce stress, and enhance focus and attention.',
        1: 'Connecting with your mind and body can also help you cope with difficult emotions, instead of pushing them away through, for example, drinking.',
        2: '<b>Flip the cards below</b>'
      },
      cards: {
        0: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s31_01.jpg',
              alt: 'person staring at the sky',
              caption: null
            },
            question: null
          },
          back: {
            description: 'Through mindfulness you pay attention to the present moment and sensations you might usually ignore. You can learn to accept unpleasant sensations, thoughts, and feelings as temporary.'
          }
        },
        1: {
          show: false,
          front: {
            img: {
              src: 'images/alcoholModule/alcohol_s31_02.jpg',
              alt: 'person doing yoga on building',
              caption: null
            },
            question: null
          },
          back: {
            description: 'According to the Mayo Clinic, yoga can help you relax and manage stress and anxiety. It can also improve your balance, flexibility and physical strength!'
          }
        }
      }
    }
  },
  // slide 33
  18: {
    slide_type: 'info',
    header: {
      title: null,
      text: null
    },
    content: {
      images: null,
      paragraph: {
        0: '<div style="text-align: center;"><b style="font-size: 2rem;">Thank you for completing this module! </b></div>',
        1: '<div style="text-align: center;"><b style="font-size: 2rem;">Your next module will be available in 5 days. You will receive an email notification from iSTART.</b></div>'
      }
    },
    format: {
      images: 'bottom'
    }
  }
}
export default alcoholModuleSlides
