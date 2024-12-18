const data = [
    {
        "title": "Adult Children of Emotionally Immature Parents: How to Heal from Distant, Rejecting, or Self-Involved Parents",
        "author": "Lindsay C. Gibson",
        "imgUrl": "https://m.media-amazon.com/images/I/713KZTsaYpL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "From Strength to Strength: Finding Success, Happiness, and Deep Purpose in the Second Half of Life",
        "author": "Arthur C. Brooks",
        "imgUrl": "https://m.media-amazon.com/images/I/A1LZcJFs9EL._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "Good Inside: A Guide to Becoming the Parent You Want to Be",
        "author": "Becky Kennedy",
        "imgUrl": "https://m.media-amazon.com/images/I/71RIWM0sv6L._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "Everything I Know About Love: A Memoir",
        "author": "Dolly Alderton",
        "imgUrl": "https://m.media-amazon.com/images/I/71QdQpTiKZL._AC_UY218_.jpg",
        "price": 9.95
    },
    {
        "title": "The Seven Principles for Making Marriage Work: A Practical Guide from the Country's Foremost Relationship Expert",
        "author": "John Gottman",
        "imgUrl": "https://m.media-amazon.com/images/I/813o4WOs+wL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Glass Castle: A Memoir",
        "author": "Jeannette Walls",
        "imgUrl": "https://m.media-amazon.com/images/I/71td5GDUZML._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Expecting Better: Why the Conventional Pregnancy Wisdom Is Wrong--and What You Really Need to Know (The ParentData Series Book 1)",
        "author": "Emily Oster",
        "imgUrl": "https://m.media-amazon.com/images/I/81NYWaTY6-S._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Never Enough: When Achievement Culture Becomes Toxic-and What We Can Do About It",
        "author": "Jennifer Breheny Wallace",
        "imgUrl": "https://m.media-amazon.com/images/I/816Sqs9RUuL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Unmasking Autism: Discovering the New Faces of Neurodiversity",
        "author": "Devon Price",
        "imgUrl": "https://m.media-amazon.com/images/I/81aqifI4AZS._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "What Happened to You?: Conversations on Trauma, Resilience, and Healing",
        "author": "Oprah Winfrey",
        "imgUrl": "https://m.media-amazon.com/images/I/713XUMrojkL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Moms on Call | Basic Baby Care 0-6 Months | Parenting Book 1 of 3 (Moms On Call Parenting Books)",
        "author": "Laura Hunter LPN",
        "imgUrl": "https://m.media-amazon.com/images/I/717AozsjVZL._AC_UY218_.jpg",
        "price": 24.99
    },
    {
        "title": "A Little Pinprick (Rainey Paxton Series Book 1)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/71GoPR+P0eL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Cribsheet: A Data-Driven Guide to Better, More Relaxed Parenting, from Birth to Preschool (The ParentData Series Book 2)",
        "author": "Emily Oster",
        "imgUrl": "https://m.media-amazon.com/images/I/81ck+JH5TyL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Daddy Diaries: The Year I Grew Up",
        "author": "Andy Cohen",
        "imgUrl": "https://m.media-amazon.com/images/I/81K6hagzi5L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Cruise: The brand new feel good, funny read guaranteed to make you smile!",
        "author": "Caroline James",
        "imgUrl": "https://m.media-amazon.com/images/I/71WFLJ+UejL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "You Could Make This Place Beautiful: A Memoir",
        "author": "Maggie Smith",
        "imgUrl": "https://m.media-amazon.com/images/I/71VPLTBFm7L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Whole-Brain Child: 12 Revolutionary Strategies to Nurture Your Child's Developing Mind",
        "author": "Daniel J. Siegel",
        "imgUrl": "https://m.media-amazon.com/images/I/71hIUKXB9iL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "It Starts with the Egg: How the Science of Egg Quality Can Help You Get Pregnant Naturally, Prevent Miscarriage, and Improve Your Odds in IVF",
        "author": "Rebecca Fett",
        "imgUrl": "https://m.media-amazon.com/images/I/51Kr3Tkha1L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Girls Are Gone: The True Story of Two Sisters Who Vanished, the Father Who Kept Searching, and the Adults Who Conspired to Keep the Truth Hidden",
        "author": "Michael Brodkorb",
        "imgUrl": "https://m.media-amazon.com/images/I/81lxZCTpbGL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "What to Expect When You're Expecting",
        "author": "Heidi Murkoff",
        "imgUrl": "https://m.media-amazon.com/images/I/915etXlMOYL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "No More Mr. Nice Guy",
        "author": "Robert Glover",
        "imgUrl": "https://m.media-amazon.com/images/I/81cjF9I+oNL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Color of Water",
        "author": "James McBride",
        "imgUrl": "https://m.media-amazon.com/images/I/91vh9a95NsL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Oh Crap! Potty Training: Everything Modern Parents Need to Know to Do It Once and Do It Right (Oh Crap Parenting Book 1)",
        "author": "Jamie Glowacki",
        "imgUrl": "https://m.media-amazon.com/images/I/81Xl5uivxhL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Polysecure: Attachment, Trauma and Consensual Nonmonogamy",
        "author": "Jessica Fern",
        "imgUrl": "https://m.media-amazon.com/images/I/61R9xArPpaL._AC_UY218_.jpg",
        "price": 10.49
    },
    {
        "title": "Beyond the Game: A Surprise Pregnancy Sports Romance (Chicago Red Tails Book 3)",
        "author": "Susan Renee",
        "imgUrl": "https://m.media-amazon.com/images/I/81LrBdKfnQL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Vax-Unvax: Let the Science Speak (Children\u2019s Health Defense)",
        "author": "Robert F. Kennedy Jr.",
        "imgUrl": "https://m.media-amazon.com/images/I/71uXZWIptvL._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "Why Does He Do That?: Inside the Minds of Angry and Controlling Men",
        "author": "Lundy Bancroft",
        "imgUrl": "https://m.media-amazon.com/images/I/812BfsBj18L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Hunt, Gather, Parent: What Ancient Cultures Can Teach Us About the Lost Art of Raising Happy, Helpful Little Humans",
        "author": "Michaeleen Doucleff",
        "imgUrl": "https://m.media-amazon.com/images/I/71aP5XG+xAL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Happy-Go-Lucky",
        "author": "David Sedaris",
        "imgUrl": "https://m.media-amazon.com/images/I/814VHe-kbAL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Duma Key: A Novel",
        "author": "Stephen King",
        "imgUrl": "https://m.media-amazon.com/images/I/81O7li80afL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Scattered Minds: The Origins and Healing of Attention Deficit Disorder",
        "author": "Gabor Mat\u00e9",
        "imgUrl": "https://m.media-amazon.com/images/I/819WQHNY4HL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Birdie & Harlow: Life, Loss, and Loving My Dog So Much I Didn't Want Kids (\u2026Until I Did)",
        "author": "Taylor Wolfe",
        "imgUrl": "https://m.media-amazon.com/images/I/81Ki4nhyS3L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "It Starts with Us: the highly anticipated sequel to IT ENDS WITH US",
        "author": "Colleen Hoover",
        "imgUrl": "https://m.media-amazon.com/images/I/81G91BUSHsL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "It Ends With Us: The emotional #1 Sunday Times bestseller",
        "author": "Colleen Hoover",
        "imgUrl": "https://m.media-amazon.com/images/I/817vqET828L._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "Spilled Milk: Based On A True Story",
        "author": "K.L. Randis",
        "imgUrl": "https://m.media-amazon.com/images/I/81wrqVLMYqL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Precious Little Sleep - Second Edition: The Complete Baby Sleep Guide for Modern Parents",
        "author": "Alexis Dubief",
        "imgUrl": "https://m.media-amazon.com/images/I/81OU-Tl-yeL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Explosive Child [Sixth Edition]: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children",
        "author": "Ross W. Greene",
        "imgUrl": "https://m.media-amazon.com/images/I/7148uFt7XbL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Daily Dad: 366 Meditations on Parenting, Love, and Raising Great Kids",
        "author": "Ryan Holiday",
        "imgUrl": "https://m.media-amazon.com/images/I/71OWksrBWjL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Habits of the Household: Practicing the Story of God in Everyday Family Rhythms",
        "author": "Justin Whitmel Earley",
        "imgUrl": "https://m.media-amazon.com/images/I/71JMQfZkuKL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "ADHD 2.0: New Science and Essential Strategies for Thriving with Distraction--from Childhood through Adulthood",
        "author": "Edward M. Hallowell",
        "imgUrl": "https://m.media-amazon.com/images/I/71JG1XPHrLL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Emotional Lives of Teenagers: Raising Connected, Capable, and Compassionate Adolescents",
        "author": "Lisa Damour Ph.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/81XIRObWvKL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Off Limits Rule: A Romantic Comedy (It Happened in Nashville Book 1)",
        "author": "Sarah Adams",
        "imgUrl": "https://m.media-amazon.com/images/I/71p2R5lhqVL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "How to Talk so Little Kids Will Listen: A Survival Guide to Life with Children Ages 2-7 (The How To Talk Series)",
        "author": "Joanna Faber",
        "imgUrl": "https://m.media-amazon.com/images/I/81wOcvN2LQL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Men Are from Mars, Women Are from Venus: The Classic Guide to Understanding the Opposite Sex",
        "author": "John Gray",
        "imgUrl": "https://m.media-amazon.com/images/I/81xfYpj5dXL._AC_UY218_.jpg",
        "price": 14.49
    },
    {
        "title": "Bringing Up B\u00e9b\u00e9: One American Mother Discovers the Wisdom of French Parenting (now with B\u00e9b\u00e9 Day by Day: 100 Keys to French Parenting)",
        "author": "Pamela Druckerman",
        "imgUrl": "https://m.media-amazon.com/images/I/81VSW1oFo8L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The State of Affairs: Rethinking Infidelity",
        "author": "Esther Perel",
        "imgUrl": "https://m.media-amazon.com/images/I/816-AGIbIlL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Bullet Journal Method: Track the Past, Order the Present, Design the Future",
        "author": "Ryder Carroll",
        "imgUrl": "https://m.media-amazon.com/images/I/91cCB6LfPLL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Raising Good Humans: A Mindful Guide to Breaking the Cycle of Reactive Parenting and Raising Kind, Confident Kids",
        "author": "Hunter Clarke-Fields MSAE",
        "imgUrl": "https://m.media-amazon.com/images/I/81GXALnkYoS._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Lost in Trans Nation: A Child Psychiatrist's Guide Out of the Madness",
        "author": "Miriam Grossman",
        "imgUrl": "https://m.media-amazon.com/images/I/71tLfWHX+oL._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "Eight Dates: Essential Conversations for a Lifetime of Love",
        "author": "John Gottman",
        "imgUrl": "https://m.media-amazon.com/images/I/91tq5Dw3RUL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Unoffendable: How Just One Change Can Make All of Life Better (updated with two new chapters)",
        "author": "Brant Hansen",
        "imgUrl": "https://m.media-amazon.com/images/I/71BAceP5JDL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Anne Of Green Gables Complete 8 Book Set",
        "author": "L. M. Montgomery",
        "imgUrl": "https://m.media-amazon.com/images/I/91wf0vyAdYL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "Unsafe: Damian longs for home, but one man stands in his way",
        "author": "Cathy Glass",
        "imgUrl": "https://m.media-amazon.com/images/I/71y3ZJlV6+L._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "When the Body Says No",
        "author": "Gabor Mat\u00e9 M.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/51mZGc6P+9L._AC_UY218_.jpg",
        "price": 13.97
    },
    {
        "title": "What to Expect the First Year",
        "author": "Heidi Murkoff",
        "imgUrl": "https://m.media-amazon.com/images/I/91IsUhg9CGL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Real Food for Pregnancy: The Science and Wisdom of Optimal Prenatal Nutrition",
        "author": "Lily Nichols",
        "imgUrl": "https://m.media-amazon.com/images/I/91xmVKvgvHL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Love Your Kids Without Losing Yourself: 5 Steps to Banish Guilt and Beat Burnout When You Already Have Too Much to Do",
        "author": "Morgan Cutlip",
        "imgUrl": "https://m.media-amazon.com/images/I/71rHgGvJIYL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Untangled: Guiding Teenage Girls Through the Seven Transitions into Adulthood",
        "author": "Lisa Damour Ph.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/81z8s5a7lOL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "What About Men?: A Feminist Answers the Question",
        "author": "Caitlin Moran",
        "imgUrl": "https://m.media-amazon.com/images/I/71zyajms39L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Holiday Home: A completely unputdownable and addictive psychological thriller",
        "author": "Daniel Hurst",
        "imgUrl": "https://m.media-amazon.com/images/I/91quaeJSgvL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Drama Free: A Guide to Managing Unhealthy Family Relationships",
        "author": "Nedra Glover Tawwab",
        "imgUrl": "https://m.media-amazon.com/images/I/91ygmz4-lvL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Unspeakable: Surviving My Childhood and Finding My Voice",
        "author": "Jessica Willis Fisher",
        "imgUrl": "https://m.media-amazon.com/images/I/9139JLnruTL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Pale-Faced Lie: A True Story",
        "author": "David Crow",
        "imgUrl": "https://m.media-amazon.com/images/I/81DyB6c3EqL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Driven to Distraction (Revised): Recognizing and Coping with Attention Deficit Disorder",
        "author": "Edward M. Hallowell",
        "imgUrl": "https://m.media-amazon.com/images/I/81E-JoJ4wfL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "How to Talk So Kids Will Listen & Listen So Kids Will Talk (The How To Talk Series)",
        "author": "Adele Faber",
        "imgUrl": "https://m.media-amazon.com/images/I/716M0mblLUL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "How Not to Hate Your Husband After Kids",
        "author": "Jancee Dunn",
        "imgUrl": "https://m.media-amazon.com/images/I/81nBMUKrE3L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The 36-Hour Day: A Family Guide to Caring for People Who Have Alzheimer Disease and Other Dementias (A Johns Hopkins Press Health Book)",
        "author": "Nancy L. Mace",
        "imgUrl": "https://m.media-amazon.com/images/I/811wclp3bbS._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "No-Drama Discipline: The Whole-Brain Way to Calm the Chaos and Nurture Your Child's Developing Mind",
        "author": "Daniel J. Siegel",
        "imgUrl": "https://m.media-amazon.com/images/I/81AYJ4dcpmL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Match: A Romantic Comedy (It happened in Charleston Book 1)",
        "author": "Sarah Adams",
        "imgUrl": "https://m.media-amazon.com/images/I/71eOinLLWmL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Walking with Sam: A Father, a Son, and Five Hundred Miles Across Spain",
        "author": "Andrew McCarthy",
        "imgUrl": "https://m.media-amazon.com/images/I/91CC+37zj-L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Unexpected Joy of Being Sober: THE SUNDAY TIMES BESTSELLER",
        "author": "Catherine Gray",
        "imgUrl": "https://m.media-amazon.com/images/I/71jlOtqjIKL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "The Boy Who Was Raised as a Dog: And Other Stories from a Child Psychiatrist's Notebook -- What Traumatized Children Can Teach Us About Loss, Love, and Healing",
        "author": "Bruce D Perry",
        "imgUrl": "https://m.media-amazon.com/images/I/81T2pP2UEWL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Look for Me There: Grieving My Father, Finding Myself",
        "author": "Luke Russert",
        "imgUrl": "https://m.media-amazon.com/images/I/714pNIw+kIL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Recovery from Narcissistic Abuse, Gaslighting, Codependency and Complex PTSD (4 Books in 1): Workbook and Guide to Overcome Trauma, Toxic Relationships, ... and Recover from Unhealthy Relationships)",
        "author": "Linda Hill",
        "imgUrl": "https://m.media-amazon.com/images/I/81br7ERch8L._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "Love and Respect: The Love She Most Desires; The Respect He Desperately Needs",
        "author": "Emerson Eggerichs PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/81uFCkI4AkL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "The Spirit Catches You and You Fall Down: A Hmong Child, Her American Doctors, and the Collision of Two Cultures (FSG Classics)",
        "author": "Anne Fadiman",
        "imgUrl": "https://m.media-amazon.com/images/I/41hmS7wl8QL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "I Don't Want to Talk About It: Overcoming the Secret Legacy of Male Depression",
        "author": "Terrence Real",
        "imgUrl": "https://m.media-amazon.com/images/I/71sHu5Kl6rL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Made For You: A grumpy sunshine sports romance. (Made For Series 2)",
        "author": "Natasha Madison",
        "imgUrl": "https://m.media-amazon.com/images/I/91pGQgaeroL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "In the Dream House: A Memoir",
        "author": "Carmen Maria Machado",
        "imgUrl": "https://m.media-amazon.com/images/I/91zeicdP-gL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Hold On to Your Kids: Why Parents Need to Matter More Than Peers",
        "author": "Gordon Neufeld",
        "imgUrl": "https://m.media-amazon.com/images/I/81lsg83srlL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Charisma Myth: How Anyone Can Master the Art and Science of Personal Magnetism",
        "author": "Olivia Fox Cabane",
        "imgUrl": "https://m.media-amazon.com/images/I/81J7ac-F-ZL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Witch's Tree: An unforgettable, heart-breaking, gripping timeslip novel",
        "author": "Elena Collins",
        "imgUrl": "https://m.media-amazon.com/images/I/81wZk2SiTJL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Worry-Free Parent: Living in Confidence So Your Kids Can Too",
        "author": "Sissy Goff",
        "imgUrl": "https://m.media-amazon.com/images/I/81jI+9-gqmL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "BELIEVE LIKE A CHILD (Home Street Home Series Book 1)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/61Dl3H8WmML._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Too Good to Leave, Too Bad to Stay: A Step-by-Step Guide to Help You Decide Whether to Stay In or Get Out of Your Relationship",
        "author": "Mira Kirshenbaum",
        "imgUrl": "https://m.media-amazon.com/images/I/81a6IxgfOdL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "This Is Me Letting You Go",
        "author": "Heidi Priebe",
        "imgUrl": "https://m.media-amazon.com/images/I/71ejRXes6rL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "It's Not Supposed to Be This Way: Finding Unexpected Strength When Disappointments Leave You Shattered",
        "author": "Lysa TerKeurst",
        "imgUrl": "https://m.media-amazon.com/images/I/81ThXlXJqgL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Dirty Laundry: Why Adults with ADHD Are So Ashamed and What We Can Do to Help",
        "author": "Richard Pink",
        "imgUrl": "https://m.media-amazon.com/images/I/71kqZjZlYqL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The American Girl: The Number One bestselling Irish historical fiction novel of heartbreaking secrets in a home for unwed mothers",
        "author": "Rachael English",
        "imgUrl": "https://m.media-amazon.com/images/I/71uhNC595hL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Made For Me: A friends to lovers sports romance. (Made For Series)",
        "author": "Natasha Madison",
        "imgUrl": "https://m.media-amazon.com/images/I/91lURcrRj5L._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The Classic Fairy Tales (Second Edition) (Norton Critical Editions)",
        "author": "Maria Tatar",
        "imgUrl": "https://m.media-amazon.com/images/I/91xuKtH0XSL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "How to Stay in Love: A Divorce Lawyer's Guide to Staying Together",
        "author": "James J. Sexton",
        "imgUrl": "https://m.media-amazon.com/images/I/71k7vavCnaL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Touched Out: Motherhood, Misogyny, Consent, and Control",
        "author": "Amanda Montei",
        "imgUrl": "https://m.media-amazon.com/images/I/71smvot9isL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "NOT \"Just Friends\": Rebuilding Trust and Recovering Your Sanity After Infidelity",
        "author": "Shirley Glass",
        "imgUrl": "https://m.media-amazon.com/images/I/711KSobKBvL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Prairie Fires: The American Dreams of Laura Ingalls Wilder",
        "author": "Caroline Fraser",
        "imgUrl": "https://m.media-amazon.com/images/I/91MtCr1ZuvL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Rules of Estrangement: Why Adult Children Cut Ties and How to Heal the Conflict",
        "author": "Joshua Coleman Ph D.",
        "imgUrl": "https://m.media-amazon.com/images/I/713oojs2soL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Book You Wish Your Parents Had Read: (And Your Children Will Be Glad That You Did)",
        "author": "Philippa Perry",
        "imgUrl": "https://m.media-amazon.com/images/I/815c+mr2APL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Should I Stay or Should I Go?: Surviving a Relationship with a Narcissist",
        "author": "Ramani Durvasula",
        "imgUrl": "https://m.media-amazon.com/images/I/91TRkRMmCoL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Trauma and Recovery: The Aftermath of Violence--From Domestic Abuse to Political Terror",
        "author": "Judith Lewis Herman MD",
        "imgUrl": "https://m.media-amazon.com/images/I/81UYzHxWiXL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships",
        "author": "Leil Lowndes",
        "imgUrl": "https://m.media-amazon.com/images/I/716i2nRD6TL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "Seven Husbands of Evelyn Hugo: The Sunday Times Bestseller",
        "author": "Taylor Jenkins Reid",
        "imgUrl": "https://m.media-amazon.com/images/I/71QeZB033YL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "Calypso",
        "author": "David Sedaris",
        "imgUrl": "https://m.media-amazon.com/images/I/81MqQlNljXL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "It. Goes. So. Fast.: The Year of No Do-Overs",
        "author": "Mary Louise Kelly",
        "imgUrl": "https://m.media-amazon.com/images/I/71iFD05QhkL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "How Y'all Doing?: Misadventures and Mischief from a Life Well Lived",
        "author": "Leslie Jordan",
        "imgUrl": "https://m.media-amazon.com/images/I/71cUnAghU6L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Child Development and Education",
        "author": "Teresa M. McDevitt",
        "imgUrl": "https://m.media-amazon.com/images/I/51UodHZJwqL._AC_UY218_.jpg",
        "price": 74.99
    },
    {
        "title": "WHY MEN MARRY BITCHES: Expanded New Edition - A Guide for Women Who Are Too Nice",
        "author": "Sherry Argov",
        "imgUrl": "https://m.media-amazon.com/images/I/61goShyX+WL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Your Brain's Not Broken: Strategies for Navigating Your Emotions and Life with ADHD",
        "author": "Tamara Phd Rosier",
        "imgUrl": "https://m.media-amazon.com/images/I/91eXrCV3cRS._AC_UY218_.jpg",
        "price": 11.68
    },
    {
        "title": "Final Call: The unputdownable must-read psychological crime thriller from the Top Ten Sunday Times bestselling author",
        "author": "Alex Lake",
        "imgUrl": "https://m.media-amazon.com/images/I/71sujWgSy6L._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "Taking Charge of Your Fertility: The Definitive Guide to Natural Birth Control, Pregnancy Achievement, and Reproductive Health",
        "author": "Toni Weschler",
        "imgUrl": "https://m.media-amazon.com/images/I/818zGXFvxwL._AC_UY218_.jpg",
        "price": 19.49
    },
    {
        "title": "For My Own Good: an immersive psychological thriller with a great twist",
        "author": "Vanessa Garbin",
        "imgUrl": "https://m.media-amazon.com/images/I/71Ve8TzADbL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "My Grandmother's Hands: Racialized Trauma and the Pathway to Mending Our Hearts and Bodies",
        "author": "LICSW Resmaa Menakem, MSW",
        "imgUrl": "https://m.media-amazon.com/images/I/91-E03x4m-L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "You're Going to Make It: 50 Morning and Evening Devotions to Unrush Your Mind, Uncomplicate Your Heart, and Experience Healing Today",
        "author": "Lysa TerKeurst",
        "imgUrl": "https://m.media-amazon.com/images/I/71u0uhVZbxL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Wild Game: My Mother, Her Secret, and Me",
        "author": "Adrienne Brodeur",
        "imgUrl": "https://m.media-amazon.com/images/I/81AHgVyOUdL._AC_UY218_.jpg",
        "price": 12.49
    },
    {
        "title": "The Happiest Baby on the Block; Fully Revised and Updated Second Edition: The New Way to Calm Crying and Help Your Newborn Baby Sleep Longer",
        "author": "Harvey Karp",
        "imgUrl": "https://m.media-amazon.com/images/I/81yQ0U8+7oL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "This Is How Your Marriage Ends: A Hopeful Approach to Saving Relationships",
        "author": "Matthew Fray",
        "imgUrl": "https://m.media-amazon.com/images/I/81m3UdB-2SL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Moms on Call | Next Steps Baby Care 6-15 Months | Parenting Book 2 of 3 (Moms On Call Parenting Books)",
        "author": "Laura Hunter",
        "imgUrl": "https://m.media-amazon.com/images/I/71rTg3R83yL._AC_UY218_.jpg",
        "price": 24.99
    },
    {
        "title": "The Game: Penetrating the Secret Society of Pickup Artists",
        "author": "Neil Strauss",
        "imgUrl": "https://m.media-amazon.com/images/I/71-YHmfV6nL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "Homecoming: Reclaiming and Healing Your Inner Child",
        "author": "John Bradshaw",
        "imgUrl": "https://m.media-amazon.com/images/I/81ufVdX8AWL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Vaccine-Friendly Plan: Dr. Paul's Safe and Effective Approach to Immunity and Health-from Pregnancy Through Your Child's Teen Years",
        "author": "Paul Thomas",
        "imgUrl": "https://m.media-amazon.com/images/I/81meYjb0--L._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "School Social Work: Practice, Policy, and Research",
        "author": "Michael S. Kelly",
        "imgUrl": "https://m.media-amazon.com/images/I/81AF3+8-6BL._AC_UY218_.jpg",
        "price": 61.49
    },
    {
        "title": "The Montessori Baby: A Parent's Guide to Nurturing Your Baby with Love, Respect, and Understanding (The Parents' Guide to Montessori Book 2)",
        "author": "Simone Davies",
        "imgUrl": "https://m.media-amazon.com/images/I/71gnJNy+WQL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "A Serial Killer's Daughter: My Story of Faith, Love, and Overcoming",
        "author": "Kerri Rawson",
        "imgUrl": "https://m.media-amazon.com/images/I/91wgJ1yCE4L._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Your Baby\u2019s Bottle-feeding Aversion: Reasons and Solutions.",
        "author": "Rowena Bennett",
        "imgUrl": "https://m.media-amazon.com/images/I/71rPAnwLDNL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Nanny For My Daddy's Best Friend: An Enemies to Lovers Age Gap Romance",
        "author": "Olivia Pearl",
        "imgUrl": "https://m.media-amazon.com/images/I/716aWJI+G6L._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Ruthless Crown: A Reverse Harem Romance (Ruthless Royals Book 1)",
        "author": "Amanda Richardson",
        "imgUrl": "https://m.media-amazon.com/images/I/81LSC9x8XPL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Potty Training in 3 Days: The Step-by-Step Plan for a Clean Break from Dirty Diapers",
        "author": "Brandi Brucks",
        "imgUrl": "https://m.media-amazon.com/images/I/81-2EwCcFnL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "1-2-3 Magic: Gentle 3-Step Child & Toddler Discipline for Calm, Effective, and Happy Parenting (Positive Parenting Guide for Raising Happy Kids)",
        "author": "Thomas W. Phelan",
        "imgUrl": "https://m.media-amazon.com/images/I/41vH+pfoBBL._AC_UY218_.jpg",
        "price": 8.45
    },
    {
        "title": "This Child of Mine: A completely heartbreaking and uplifting story of love, loss and hope for 2023",
        "author": "Emma-Claire Wilson",
        "imgUrl": "https://m.media-amazon.com/images/I/81Z+iE7IhDL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "On Repentance And Repair: Making Amends in an Unapologetic World",
        "author": "Danya Ruttenberg",
        "imgUrl": "https://m.media-amazon.com/images/I/81VrGVOZzOL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "On Becoming Babywise: Giving Your Infant the Gift of Nighttime Sleep - New Edition (On Becoming.)",
        "author": "Robert Bucknam M.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/61quqfDg+CL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Will I Ever Be Good Enough?: Healing the Daughters of Narcissistic Mothers",
        "author": "Karyl McBride",
        "imgUrl": "https://m.media-amazon.com/images/I/81MdR12WEaL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Love Prescription: Seven Days to More Intimacy, Connection, and Joy (The Seven Days Series Book 1)",
        "author": "John Gottman",
        "imgUrl": "https://m.media-amazon.com/images/I/71wIue4B37L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Crucial Conversations Tools for Talking When Stakes Are High, Second Edition",
        "author": "Kerry Patterson",
        "imgUrl": "https://m.media-amazon.com/images/I/81Z3MXN75aL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "There Was a Little Girl: The Real Story of My Mother and Me",
        "author": "Brooke Shields",
        "imgUrl": "https://m.media-amazon.com/images/I/81Ks-YxpHQL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Uniquely Human: A Different Way of Seeing Autism",
        "author": "Barry M. Prizant",
        "imgUrl": "https://m.media-amazon.com/images/I/71E7+7UmqtL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "What If?: The perfect laugh-out-loud romantic comedy from #1 bestseller Shari Low",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/719aTicLPDL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Doing Life with Your Adult Children: Keep Your Mouth Shut and the Welcome Mat Out",
        "author": "Jim Burns",
        "imgUrl": "https://m.media-amazon.com/images/I/91DyBA-4j+L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Fat Talk: Parenting in the Age of Diet Culture",
        "author": "Virginia Sole-Smith",
        "imgUrl": "https://m.media-amazon.com/images/I/71TMNrolUYL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "NeuroTribes: The Legacy of Autism and the Future of Neurodiversity",
        "author": "Steve Silberman",
        "imgUrl": "https://m.media-amazon.com/images/I/81M63xgtmXL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Permission to Feel: Unlocking the Power of Emotions to Help Our Kids, Ourselves, and Our Society Thrive",
        "author": "Marc Brackett,Ph.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/81mYY5X1nqL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Nanny for the Bossy Daddy: An Age Gap, Billionaire Boss Romance",
        "author": "Ava Nichols",
        "imgUrl": "https://m.media-amazon.com/images/I/81u5UwP3TjL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Was It Even Abuse?: Restoring clarity after covert abuse.",
        "author": "Emma Rose Byham",
        "imgUrl": "https://m.media-amazon.com/images/I/61UUB7oUh0L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Does the Bible Support Same-Sex Marriage?: 21 Conversations from a Historically Christian View",
        "author": "Preston Sprinkle",
        "imgUrl": "https://m.media-amazon.com/images/I/817qD2Ry3eL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "White Fragility: Why It's So Hard for White People to Talk About Racism",
        "author": "Robin J. DiAngelo",
        "imgUrl": "https://m.media-amazon.com/images/I/81V8ozIJTVL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Sleepover: The unputdownable, page-turning psychological thriller from bestseller Keri Beevis",
        "author": "Keri Beevis",
        "imgUrl": "https://m.media-amazon.com/images/I/91bbG6BgNXL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "The Montessori Toddler: A Parent's Guide to Raising a Curious and Responsible Human Being (The Parents' Guide to Montessori Book 1)",
        "author": "Simone Davies",
        "imgUrl": "https://m.media-amazon.com/images/I/71PQ7iiJX3L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Anne Of Green Gables: Complete 8-Book Box Set",
        "author": "L. M. Montgomery",
        "imgUrl": "https://m.media-amazon.com/images/I/81nkKWQJxlL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "Wired for Love: How Understanding Your Partner's Brain and Attachment Style Can Help You Defuse Conflict and Build a Secure Relationship",
        "author": "Stan Tatkin",
        "imgUrl": "https://m.media-amazon.com/images/I/71NyaRbqSAL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "When Smiles Fade (Home Street Home Series Book 2)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/71ksoTmK1SL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "The Self-Driven Child: The Science and Sense of Giving Your Kids More Control Over Their Lives",
        "author": "William Stixrud",
        "imgUrl": "https://m.media-amazon.com/images/I/81S8Jf6iWFL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Ascend: A Marriage of Convenience, Single Mom, Friends to Lovers Romance (Elements of Rapture Book 2)",
        "author": "Swati MH",
        "imgUrl": "https://m.media-amazon.com/images/I/81kaEcP0rCL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Swimming For Beginners: The emotional and uplifting new read of 2023",
        "author": "Nicola Gill",
        "imgUrl": "https://m.media-amazon.com/images/I/71mVCDGVHjL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Meals She Eats: Empowering Advice, Relatable Stories, and Over 25 Recipes to Take Control of Your PCOS",
        "author": "Tom Sullivan",
        "imgUrl": "https://m.media-amazon.com/images/I/91bvZzDPF7L._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Finding Freedom: A Cook's Story; Remaking a Life from Scratch",
        "author": "Erin French",
        "imgUrl": "https://m.media-amazon.com/images/I/81pxl47PSDL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "One Summer Sunrise: An uplifting escapist read from bestselling author Shari Low",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/8146gSYcOvL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Perfect Father: The True Story of Chris Watts, His All-American Family, and a Shocking Murder",
        "author": "John Glatt",
        "imgUrl": "https://m.media-amazon.com/images/I/719+nTUl0rL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Disarming the Narcissist: Surviving and Thriving with the Self-Absorbed",
        "author": "Wendy T. Behary",
        "imgUrl": "https://m.media-amazon.com/images/I/71p44XR3CLS._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Stolen Focus: Why You Can't Pay Attention",
        "author": "Johann Hari",
        "imgUrl": "https://m.media-amazon.com/images/I/712SQSzvDhL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "The Golden Oldies' Book Club: The feel-good novel from USA Today Bestseller Judy Leigh for 2023",
        "author": "Judy Leigh",
        "imgUrl": "https://m.media-amazon.com/images/I/717ZVLOOHKL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Nosey Neighbor: The Ozarks Cozy Mystery Series",
        "author": "Dianne Harman",
        "imgUrl": "https://m.media-amazon.com/images/I/A1IwCkzlECL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Stop Caretaking the Borderline or Narcissist: How to End the Drama and Get On with Life",
        "author": "Margalis Fjelstad",
        "imgUrl": "https://m.media-amazon.com/images/I/81MtPa9wrcL._AC_UY218_.jpg",
        "price": 21.99
    },
    {
        "title": "Breaking Free of Child Anxiety and OCD: A Scientifically Proven Program for Parents",
        "author": "Eli R. Lebowitz",
        "imgUrl": "https://m.media-amazon.com/images/I/71Im3D+P5GL._AC_UY218_.jpg",
        "price": 9.59
    },
    {
        "title": "It's Not about the Wine: The Loaded Truth behind Mommy Wine Culture",
        "author": "Celeste Yvonne",
        "imgUrl": "https://m.media-amazon.com/images/I/61U2T5tmLXL._AC_UY218_.jpg",
        "price": 17.99
    },
    {
        "title": "Demystifying Disability: What to Know, What to Say, and How to Be an Ally",
        "author": "Emily Ladau",
        "imgUrl": "https://m.media-amazon.com/images/I/81xAcJb4EdL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "In Pieces",
        "author": "Sally Field",
        "imgUrl": "https://m.media-amazon.com/images/I/71Lle-aq-AL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Masculine in Relationship: A Blueprint for Inspiring the Trust, Lust, and Devotion of a Strong Woman",
        "author": "GS Youngblood",
        "imgUrl": "https://m.media-amazon.com/images/I/61T3csxLH9L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Beyond the Pill: A 30-Day Program to Balance Your Hormones, Reclaim Your Body, and Reverse the Dangerous Side Effects of the Birth Control Pill",
        "author": "Jolene Brighten",
        "imgUrl": "https://m.media-amazon.com/images/I/81NH01cQUpL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Lost Girls: The Unsolved American Mystery of the Gilgo Beach Serial Killer Murders",
        "author": "Robert Kolker",
        "imgUrl": "https://m.media-amazon.com/images/I/7133EJkABYL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Win Your Breakup: How to Be The One That Got Away",
        "author": "Natasha Adamo",
        "imgUrl": "https://m.media-amazon.com/images/I/71O7UzWpSNL._AC_UY218_.jpg",
        "price": 6.49
    },
    {
        "title": "Skinfolk: A Memoir",
        "author": "Matthew Pratt Guterl",
        "imgUrl": "https://m.media-amazon.com/images/I/61ZLVLljQvL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Sober Diaries: How one woman stopped drinking and started living.",
        "author": "Clare Pooley",
        "imgUrl": "https://m.media-amazon.com/images/I/71Q96+Eb9KL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "Boundary Boss: The Essential Guide to Talk True, Be Seen, and (Finally) Live Free",
        "author": "LCSW Cole, Terri, MSW",
        "imgUrl": "https://m.media-amazon.com/images/I/81idbFG+4ML._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Drama of the Gifted Child: The Search for the True Self",
        "author": "Alice Miller",
        "imgUrl": "https://m.media-amazon.com/images/I/812z2UG-ExL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Unplugged Alpha: The No Bullsh*t Guide To Winning With Women & Life",
        "author": "Richard Cooper",
        "imgUrl": "https://m.media-amazon.com/images/I/61BQ87IW1TL._AC_UY218_.jpg",
        "price": 7.2
    },
    {
        "title": "Parenting: 14 Gospel Principles That Can Radically Change Your Family",
        "author": "Paul David Tripp",
        "imgUrl": "https://m.media-amazon.com/images/I/41rpOIDmBhL._AC_UY218_.jpg",
        "price": 13.77
    },
    {
        "title": "Beautiful Country: A Memoir of an Undocumented Childhood",
        "author": "Qian Julie Wang",
        "imgUrl": "https://m.media-amazon.com/images/I/81pVsqRa9dL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Bettyville: A Memoir",
        "author": "George Hodgman",
        "imgUrl": "https://m.media-amazon.com/images/I/910+2j1FroL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Mean Little People (Home Street Home Series Book 4)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/61zQI1UoOeL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "I Am Not Sick I Don\u2019t Need Help!: How to Help Someone Accept Treatment - 20th Anniversary Edition",
        "author": "Xavier Amador",
        "imgUrl": "https://m.media-amazon.com/images/I/81oDoAozJkL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Elissas: Three Girls, One Fate, and the Deadly Secrets of Suburbia",
        "author": "Samantha Leach",
        "imgUrl": "https://m.media-amazon.com/images/I/81n22s7khDL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Life Is in the Transitions: Mastering Change at Any Age",
        "author": "Bruce Feiler",
        "imgUrl": "https://m.media-amazon.com/images/I/71nz507myDL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Becoming Sister Wives: The Story of an Unconventional Marriage",
        "author": "Kody Brown",
        "imgUrl": "https://m.media-amazon.com/images/I/81gOkK9R2NL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Raising Kids with Big, Baffling Behaviors: Brain-Body-Sensory Strategies That Really Work",
        "author": "Robyn Gobbel",
        "imgUrl": "https://m.media-amazon.com/images/I/813xS2mbrsL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "WomanCode: Perfect Your Cycle, Amplify Your Fertility, Supercharge Your Sex Drive, and Become a Power Source",
        "author": "Alisa Vitti",
        "imgUrl": "https://m.media-amazon.com/images/I/71+cRE8xl2L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Women Who Love Too Much",
        "author": "Robin Norwood",
        "imgUrl": "https://m.media-amazon.com/images/I/718P3JQ2mbL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Famous Last Words",
        "author": "C.W. Farnsworth",
        "imgUrl": "https://m.media-amazon.com/images/I/81LI3hbfHOL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "The Expectant Father: The Ultimate Guide for Dads-to-Be (Fifth Edition) (The New Father)",
        "author": "Armin A. Brott",
        "imgUrl": "https://m.media-amazon.com/images/I/71+Xi-rp2JL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Return (Pulitzer Prize Winner): Fathers, Sons and the Land in Between",
        "author": "Hisham Matar",
        "imgUrl": "https://m.media-amazon.com/images/I/81ENQFGvIXL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Tender Bar: A Memoir",
        "author": "J.R. Moehringer",
        "imgUrl": "https://m.media-amazon.com/images/I/915PVHOjOtL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "The Secret: A gripping novel of how far a mother would go for her child from the #1 author of The Letter: A gripping World War Two historical fiction novel ... her child from the #1 author of The Letter",
        "author": "Kathryn Hughes",
        "imgUrl": "https://m.media-amazon.com/images/I/91CdSmJAFfL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "I Never Thought of It That Way: How to Have Fearlessly Curious Conversations in Dangerously Divided Times",
        "author": "M\u00f3nica Guzm\u00e1n",
        "imgUrl": "https://m.media-amazon.com/images/I/71TVI3RA7RL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Birth Partner 5th Edition: A Complete Guide to Childbirth for Dads, Partners, Doulas, and All Other Labor Companions",
        "author": "Penny Simkin",
        "imgUrl": "https://m.media-amazon.com/images/I/91MezXa54TL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Anatomy of Peace, Fourth Edition: Resolving the Heart of Conflict",
        "author": "The Arbinger Institute,",
        "imgUrl": "https://m.media-amazon.com/images/I/91bjhlOI6WL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "My Final Breath (Home Street Home Series Book 6)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/71xk1Xg8KxL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Healthy Sleep Habits, Happy Child, 5th Edition: A New Step-by-Step Guide for a Good Night's Sleep",
        "author": "Marc Weissbluth M.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/81mgiWyFSiS._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Twelve Hours' Sleep by Twelve Weeks Old: A Step-by-Step Plan for Baby Sleep Success",
        "author": "Suzy Giordano",
        "imgUrl": "https://m.media-amazon.com/images/I/717KDwo2b9L._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Deepest Well: Healing the Long-Term Effects of Childhood Trauma and Adversity",
        "author": "Nadine Burke Harris",
        "imgUrl": "https://m.media-amazon.com/images/I/91wzjfDLCDL._AC_UY218_.jpg",
        "price": 12.49
    },
    {
        "title": "Wanted Wed Or Alive: The G.D. Taylors Series",
        "author": "Willow Aster",
        "imgUrl": "https://m.media-amazon.com/images/I/71JZzJuB08L._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Unfinished Business: Breaking Down the Great Wall Between Adult Child and Immigrant Parents",
        "author": "Amy C. Yip",
        "imgUrl": "https://m.media-amazon.com/images/I/81JYO3MM+4L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Los 5 lenguajes del amor (Spanish Edition)",
        "author": "Gary Chapman",
        "imgUrl": "https://m.media-amazon.com/images/I/81+llin32UL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Love to Hate Her: Enemies to Lovers Rockstar Romance (Wild Love Book 2)",
        "author": "J. Saman",
        "imgUrl": "https://m.media-amazon.com/images/I/81kDjJ1QFCL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The Quickening: Creation and Community at the Ends of the Earth",
        "author": "Elizabeth Rush",
        "imgUrl": "https://m.media-amazon.com/images/I/81kD7ZotQsL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "A Child Called It: One Child's Courage to Survive",
        "author": "Dave Pelzer",
        "imgUrl": "https://m.media-amazon.com/images/I/711z1MuC7+L._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Calm the Chaos: A Fail-Proof Road Map for Parenting Even the Most Challenging Kids",
        "author": "Dayna Abraham",
        "imgUrl": "https://m.media-amazon.com/images/I/61WJ5Yn5-xL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Ruthless Queen: A Reverse Harem Romance (Ruthless Royals Book 2)",
        "author": "Amanda Richardson",
        "imgUrl": "https://m.media-amazon.com/images/I/71-6--RnsML._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "A Heart That Works",
        "author": "Rob Delaney",
        "imgUrl": "https://m.media-amazon.com/images/I/71BULEluw4L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Simplest Baby Book in the World: The Illustrated, Grab-and-Do Guide for a Healthy, Happy Baby",
        "author": "S.M. Gross",
        "imgUrl": "https://m.media-amazon.com/images/I/61n76aOFSXL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Furore: Texas Chapter Duet Part One (The Night Skulls MC Book 1)",
        "author": "N.J. Adel",
        "imgUrl": "https://m.media-amazon.com/images/I/81T49r60dGL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "To Have and to Hold: Motherhood, Marriage, and the Modern Dilemma",
        "author": "Molly Millwood",
        "imgUrl": "https://m.media-amazon.com/images/I/71cFHwgi9ML._AC_UY218_.jpg",
        "price": 19.99
    },
    {
        "title": "We're Pregnant! The First Time Dad's Pregnancy Handbook (First-Time Dads)",
        "author": "Adrian Kulp",
        "imgUrl": "https://m.media-amazon.com/images/I/81yEsHwZK7L._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "The Family Firm: A Data-Driven Guide to Better Decision Making in the Early School Years (The ParentData Series Book 3)",
        "author": "Emily Oster",
        "imgUrl": "https://m.media-amazon.com/images/I/71dKlavv90L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Prickly Romance: Single Dad AMBW (Billionaire Dads)",
        "author": "Nia Arthurs",
        "imgUrl": "https://m.media-amazon.com/images/I/71smsg2ASML._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The Book of Boundaries: Set the Limits That Will Set You Free",
        "author": "Melissa Urban",
        "imgUrl": "https://m.media-amazon.com/images/I/71SyxFm1WBL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "After the Affair, Third Edition: Healing the Pain and Rebuilding Trust When a Partner Has Been Unfaithful",
        "author": "Janis Abrahms Spring",
        "imgUrl": "https://m.media-amazon.com/images/I/71hANUryx7L._AC_UY218_.jpg",
        "price": 15.49
    },
    {
        "title": "Healing Your Wounded Inner Child: A CBT Workbook to Overcome Past Trauma, Face Abandonment and Regain Emotional Stability. (Cognitive Behavioral Therapy)",
        "author": "Maria Clarke",
        "imgUrl": "https://m.media-amazon.com/images/I/81EfsAjfveL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Taking Charge of ADHD: The Complete, Authoritative Guide for Parents",
        "author": "Russell A. Barkley PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/81ZMF-XhwkL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Kissing Asphalt: The Courageous True Story of One Child's Unbreakable Spirit\u2014From Kidnapping & Abuse to Self-Love (ResilientAF Book 1)",
        "author": "Delicia Niami",
        "imgUrl": "https://m.media-amazon.com/images/I/91D1xiVxhVL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Beautiful Boy: A Father's Journey Through His Son's Addiction",
        "author": "David Sheff",
        "imgUrl": "https://m.media-amazon.com/images/I/91uxNNVveML._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Dance of Anger: A Woman's Guide to Changing the Patterns of Intimate Relationships",
        "author": "Harriet Lerner",
        "imgUrl": "https://m.media-amazon.com/images/I/81b9KBAdTrL._AC_UY218_.jpg",
        "price": 8.99
    },
    {
        "title": "One Day In Summer: The perfect uplifting read from bestseller Shari Low",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/81rEIxjxKSL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Recovering from Emotionally Immature Parents: Practical Tools to Establish Boundaries and Reclaim Your Emotional Autonomy",
        "author": "Lindsay C. Gibson",
        "imgUrl": "https://m.media-amazon.com/images/I/71tiK8NIRIL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Rise: As seen on ITV - a gritty, glamorous thriller from Shari Low and TV's Ross King (The Hollywood Thriller Trilogy Book 1)",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/71H+KMlljZL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "We Were Once a Family: A Story of Love, Death, and Child Removal in America",
        "author": "Roxanna Asgarian",
        "imgUrl": "https://m.media-amazon.com/images/I/614LpDBRvHL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "More Than Two: A Practical Guide to Ethical Polyamory (More Than Two Essentials)",
        "author": "Franklin Veaux",
        "imgUrl": "https://m.media-amazon.com/images/I/81yhHc38cAL._AC_UY218_.jpg",
        "price": 10.49
    },
    {
        "title": "Travelers to Unimaginable Lands: Stories of Dementia, the Caregiver, and the Human Brain",
        "author": "Dasha Kiper",
        "imgUrl": "https://m.media-amazon.com/images/I/81RlvRMPCNL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "My One Month Marriage: The uplifting page-turner from #1 bestseller Shari Low",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/81E92KLFLFL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Nurture Revolution: Grow Your Baby's Brain and Transform Their Mental Health through the Art of Nurtured Parenting",
        "author": "Greer Kirshenbaum, PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/A1DXvQNC1ZL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Woven: Nurturing a Faith Your Kid Doesn't Have to Heal From",
        "author": "Meredith Miller",
        "imgUrl": "https://m.media-amazon.com/images/I/91JtN7xaS5L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Secret Baby With My Brother's Best Friend: An Enemies to Lovers Fake Dating Sports Romance",
        "author": "Bella Chandler",
        "imgUrl": "https://m.media-amazon.com/images/I/71h0GcTsmQL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Control: A single dad romance (The Protocol Series Book 1)",
        "author": "Lasairiona Lewis",
        "imgUrl": "https://m.media-amazon.com/images/I/91DTp5B3PvL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Shepherding a Child's Heart",
        "author": "Tedd Tripp",
        "imgUrl": "https://m.media-amazon.com/images/I/51HsSlEqarL._AC_UY218_.jpg",
        "price": 8.54
    },
    {
        "title": "Conscious Uncoupling: 5 Steps to Living Happily Even After",
        "author": "Katherine Woodward Thomas",
        "imgUrl": "https://m.media-amazon.com/images/I/71voAKW+TXL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Done With The Crying: Help and Healing for Mothers of Estranged Adult Children",
        "author": "Sheri McGregor",
        "imgUrl": "https://m.media-amazon.com/images/I/81eNLHlC7zL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Rosemary: The Hidden Kennedy Daughter",
        "author": "Kate Clifford Larson",
        "imgUrl": "https://m.media-amazon.com/images/I/81ZNnbrWHgL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Simplicity Parenting: Using the Extraordinary Power of Less to Raise Calmer, Happier, and More Secure Kids (Early Years)",
        "author": "Kim John (M.Ed) Payne",
        "imgUrl": "https://m.media-amazon.com/images/I/81kfi7BCnqL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Before and After: The Incredible Real-Life Stories of Orphans Who Survived the Tennessee Children's Home Society",
        "author": "Judy Christie",
        "imgUrl": "https://m.media-amazon.com/images/I/91qRMS2FHsL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Grumpy Billionaire Protector: A Forced Proximity, Enemies to Lovers Romance",
        "author": "Olivia Jade",
        "imgUrl": "https://m.media-amazon.com/images/I/71wC6g6kFiL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Communicate Your Feelings (without starting a fight): What to Say and What Not to Say to Your Partner (Mental & Emotional Wellness Book 1)",
        "author": "Nic Saluppo",
        "imgUrl": "https://m.media-amazon.com/images/I/71bp1dgjCjL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "What Next?: The BRAND NEW laugh-out-loud novel from #1 bestseller Shari Low",
        "author": "Shari Low",
        "imgUrl": "https://m.media-amazon.com/images/I/71Qtjz+PtsL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "When Kids Say They're Trans: A Guide for Parents",
        "author": "Sasha Ayad",
        "imgUrl": "https://m.media-amazon.com/images/I/61r5IbnJVtL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Highly Sensitive Child: Helping Our Children Thrive When the World Overwhelms Them",
        "author": "Elaine N. Aron",
        "imgUrl": "https://m.media-amazon.com/images/I/81IBePl98BL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "All Her Little Lies: A totally gripping new psychological thriller with a shocking twist",
        "author": "Becca Day",
        "imgUrl": "https://m.media-amazon.com/images/I/81u8lf1FbhL._AC_UY218_.jpg",
        "price": 2.49
    },
    {
        "title": "Somebody's Daughter: A Memoir",
        "author": "Ashley C. Ford",
        "imgUrl": "https://m.media-amazon.com/images/I/715BV0VgNEL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Insecure in Love: How Anxious Attachment Can Make You Feel Jealous, Needy, and Worried and What You Can Do About It",
        "author": "Leslie Becker-Phelps PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/71eBHFAB7YL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Never Be Alone (Home Street Home Series Book 5)",
        "author": "Paige Dearth",
        "imgUrl": "https://m.media-amazon.com/images/I/81XKina4DfL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "In a Father's Footsteps: Book Club Fiction (Women of Savannah)",
        "author": "Veronica Mixon",
        "imgUrl": "https://m.media-amazon.com/images/I/71r09srJYmL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "The Intentional Father: A Practical Guide to Raise Sons of Courage and Character (Includes Activities, Rites of Passage, and Steps for Parenting Boys. ... for Dads, Grandpas, and Expectant Fathers)",
        "author": "Jon Tyson",
        "imgUrl": "https://m.media-amazon.com/images/I/81EWqcfHf5L._AC_UY218_.jpg",
        "price": 9.21
    },
    {
        "title": "Cats & Daughters:: They Don't Always Come When Called",
        "author": "Helen Brown",
        "imgUrl": "https://m.media-amazon.com/images/I/71NbQgl2sdL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "Seeing Beautiful Again: 50 Devotions to Find Redemption in Every Part of Your Story",
        "author": "Lysa TerKeurst",
        "imgUrl": "https://m.media-amazon.com/images/I/81BgHZ8MDqL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Development Through The Lifespan",
        "author": "Laura E. Berk",
        "imgUrl": "https://m.media-amazon.com/images/I/A1ByEqelh8L._AC_UY218_.jpg",
        "price": 52.52
    },
    {
        "title": "Overcoming Dyslexia (2020 Edition): Second Edition, Completely Revised and Updated",
        "author": "Sally E. Shaywitz",
        "imgUrl": "https://m.media-amazon.com/images/I/815fw8F-xzL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "You Only Live Once: The laugh-out-loud, feel-good romantic comedy from Maxine Morrey",
        "author": "Maxine Morrey",
        "imgUrl": "https://m.media-amazon.com/images/I/71mB5TNtjgL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "No Bad Kids: Toddler Discipline Without Shame",
        "author": "Janet Lansbury",
        "imgUrl": "https://m.media-amazon.com/images/I/816uYOgPiiL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Another Forgotten Child",
        "author": "Cathy Glass",
        "imgUrl": "https://m.media-amazon.com/images/I/81EuxrW9YnL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Nobody Loves Me: Bobby\u2019s true story of neglect, secrets and abuse",
        "author": "Maggie Hartley",
        "imgUrl": "https://m.media-amazon.com/images/I/71rq-yVk-BL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "A Radical Guide for Women with ADHD: Embrace Neurodiversity, Live Boldly, and Break Through Barriers",
        "author": "Sari Solden",
        "imgUrl": "https://m.media-amazon.com/images/I/81zovTswI4L._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "My Own Magic: A Reappearing Act",
        "author": "Anna Kloots",
        "imgUrl": "https://m.media-amazon.com/images/I/810QQkWGOQL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Family at Number 11: A twisty, nail-biting and unputdownable psychological thriller",
        "author": "Kathryn Whitfield",
        "imgUrl": "https://m.media-amazon.com/images/I/71YzgrwY+yL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Guide to a Healthy Pregnancy, 2nd Edition: 2nd Edition: Fully Revised and Updated",
        "author": "Mayo Clinic",
        "imgUrl": "https://m.media-amazon.com/images/I/712Af-xENML._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Wonder Weeks: A Stress-Free Guide to Your Baby's Behavior (6th Edition)",
        "author": "Xaviera Plooij",
        "imgUrl": "https://m.media-amazon.com/images/I/81NX7P+fbRL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Baby Decision: How to Make the Most Important Choice of Your Life",
        "author": "Merle Bombardieri MSW LICSW",
        "imgUrl": "https://m.media-amazon.com/images/I/81L3ytl-RiL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Low-Demand Parenting: Dropping Demands, Restoring Calm, and Finding Connection with your Uniquely Wired Child",
        "author": "Amanda Diekman",
        "imgUrl": "https://m.media-amazon.com/images/I/614tsMeFPzL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Courage to Stay: How to Heal From an Affair and Save Your Marriage",
        "author": "Kathy Nickerson PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/81R2szmfJFL._AC_UY218_.jpg",
        "price": 9.95
    },
    {
        "title": "The First Forty Days: The Essential Art of Nourishing the New Mother",
        "author": "Heng Ou",
        "imgUrl": "https://m.media-amazon.com/images/I/81-JBknbg2L._AC_UY218_.jpg",
        "price": 9.5
    },
    {
        "title": "The Happiest Toddler on the Block: How to Eliminate Tantrums and Raise a Patient, Respectful and Cooperative One- to Four-Year-Old: Revised Edition",
        "author": "Harvey Karp",
        "imgUrl": "https://m.media-amazon.com/images/I/51z8aOzAGFL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Autism Spectrum Disorders from Theory to Practice: Assessment and Intervention Tools Across the Lifespan",
        "author": "Belinda Daughrity",
        "imgUrl": "https://m.media-amazon.com/images/I/51vxc0-J+YL._AC_UY218_.jpg",
        "price": 56.0
    },
    {
        "title": "What to Expect Before You're Expecting: The Complete Guide to Getting Pregnant",
        "author": "Heidi Murkoff",
        "imgUrl": "https://m.media-amazon.com/images/I/91RPV8vgruL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Pregnancy, Childbirth, and the Newborn: The Complete Guide",
        "author": "Penny Simkin",
        "imgUrl": "https://m.media-amazon.com/images/I/91cCn0vU9fL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Parenting with Love and Logic: Teaching Children Responsibility",
        "author": "Jim Fay",
        "imgUrl": "https://m.media-amazon.com/images/I/81M15Gwn2OL._AC_UY218_.jpg",
        "price": 18.93
    },
    {
        "title": "A Sister's Promise: The heartbreaking read from Caroline Finnerty",
        "author": "Caroline Finnerty",
        "imgUrl": "https://m.media-amazon.com/images/I/81OtBg8CgiL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Grief Recovery Handbook, 20th Anniversary Expanded Edition: The Action Program for Moving Beyond Death, Divorce, and Other Losses including Health, Career, and Faith",
        "author": "John W. James",
        "imgUrl": "https://m.media-amazon.com/images/I/71YMDlGIM3L._AC_UY218_.jpg",
        "price": 14.49
    },
    {
        "title": "A Place Called Home: A Memoir",
        "author": "David Ambroz",
        "imgUrl": "https://m.media-amazon.com/images/I/91VYJuFMUDL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "The Art Of Seduction (The Modern Machiavellian Robert Greene Book 1)",
        "author": "Robert Greene",
        "imgUrl": "https://m.media-amazon.com/images/I/61LmjXQ-NdL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "Siblings Without Rivalry: How to Help Your Children Live Together So You Can Live Too",
        "author": "Adele Faber",
        "imgUrl": "https://m.media-amazon.com/images/I/51ugB3rC6OL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Mom Rage: The Everyday Crisis of Modern Motherhood",
        "author": "Minna Dubin",
        "imgUrl": "https://m.media-amazon.com/images/I/7138jV-O14L._AC_UY218_.jpg",
        "price": 17.99
    },
    {
        "title": "Child, Family, and Community: Family-Centered Early Care and Education",
        "author": "Gonzalez-Mena Janet",
        "imgUrl": "https://m.media-amazon.com/images/I/61gEGxFr2XL._AC_UY218_.jpg",
        "price": 74.99
    },
    {
        "title": "When to Walk Away: Finding Freedom from Toxic People",
        "author": "Gary Thomas",
        "imgUrl": "https://m.media-amazon.com/images/I/717O3BlQ88L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Womanly Art of Breastfeeding: Completely Revised and Updated 8th Edition",
        "author": "LA LECHE LEAGUE INTERNATIONAL",
        "imgUrl": "https://m.media-amazon.com/images/I/51vGPBEiuQL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Gift of Years: Growing Older Gracefully",
        "author": "Joan Chittister",
        "imgUrl": "https://m.media-amazon.com/images/I/81WX7o34STL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Broken Faith: Inside one of America's Most Dangerous Cults",
        "author": "Mitch Weiss",
        "imgUrl": "https://m.media-amazon.com/images/I/71Qtkm0gmAL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "On Grief and Grieving: Finding the Meaning of Grief Through the Five Stages of Loss",
        "author": "Elisabeth Kubler-Ross",
        "imgUrl": "https://m.media-amazon.com/images/I/71r7AZBLhtL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Solve Your Child's Sleep Problems: Revised Edition: New, Revised, and Expanded Edition",
        "author": "Richard Ferber",
        "imgUrl": "https://m.media-amazon.com/images/I/71J7Oc7VZ7L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Parenting: Getting It Right",
        "author": "Andy Stanley",
        "imgUrl": "https://m.media-amazon.com/images/I/710M8ivv1oL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "My Secret Baby for the Wide Receiver: An Enemies to Lovers Sports Romance",
        "author": "Olivia Pearl",
        "imgUrl": "https://m.media-amazon.com/images/I/717Qckhj2GL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Walls We Break (The Alphaletes Book 2)",
        "author": "Katelyn Taylor",
        "imgUrl": "https://m.media-amazon.com/images/I/81xguDLeINL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The 7 Habits Of Highly Effective Teens",
        "author": "Sean Covey",
        "imgUrl": "https://m.media-amazon.com/images/I/91tO0NfkvcL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Raising Spiritual Champions: Nurturing Your Child's Heart, Mind and Soul",
        "author": "Dr. George Barna",
        "imgUrl": "https://m.media-amazon.com/images/I/71KyNW6CB2L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "El arte de la seducci\u00f3n (Biblioteca Robert Greene) (Spanish Edition)",
        "author": "Robert Greene",
        "imgUrl": "https://m.media-amazon.com/images/I/915QsMZuVwL._AC_UY218_.jpg",
        "price": 13.77
    },
    {
        "title": "Leave a Cheater, Gain a Life: The Chump Lady's Survival Guide",
        "author": "Tracy Schorn",
        "imgUrl": "https://m.media-amazon.com/images/I/71Vd6pUVTAL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "The Good Daughter Syndrome: Help For Empathic Daughters of Narcissistic, Borderline, or Difficult Mothers Trapped in the Role of the Good Daughter",
        "author": "Katherine K Fabrizio",
        "imgUrl": "https://m.media-amazon.com/images/I/81gEV-oa2fL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "I Hear You: The Surprisingly Simple Skill Behind Extraordinary Relationships",
        "author": "Michael S. Sorensen",
        "imgUrl": "https://m.media-amazon.com/images/I/71ippXrt2SL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Walking Home: Common Sense and Other Misadventures On the Pacific Crest Trail",
        "author": "Rick Rogers",
        "imgUrl": "https://m.media-amazon.com/images/I/615whsEsrWL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Rejected, Shamed, and Blamed: Help and Hope for Adults in the Family Scapegoat Role",
        "author": "Rebecca C. Mandeville",
        "imgUrl": "https://m.media-amazon.com/images/I/71L+tZtWvTL._AC_UY218_.jpg",
        "price": 7.29
    },
    {
        "title": "Psychopath Free (Expanded Edition): Recovering from Emotionally Abusive Relationships With Narcissists, Sociopaths, and Other Toxic People",
        "author": "Jackson MacKenzie",
        "imgUrl": "https://m.media-amazon.com/images/I/71ANfhGXHjL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Far From the Tree: Parents, Children and the Search for Identity",
        "author": "Andrew Solomon",
        "imgUrl": "https://m.media-amazon.com/images/I/81mpoDH7RsL._AC_UY218_.jpg",
        "price": 17.99
    },
    {
        "title": "Peaceful Parent, Happy Kids: How to Stop Yelling and Start Connecting (The Peaceful Parent Series)",
        "author": "Dr. Laura Markham",
        "imgUrl": "https://m.media-amazon.com/images/I/71oSS14x4-L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Highly Sensitive Person's Guide to Dealing with Toxic People: How to Reclaim Your Power from Narcissists and Other Manipulators",
        "author": "Shahida Arabi MA",
        "imgUrl": "https://m.media-amazon.com/images/I/71L2B6NIcDL._AC_UY218_.jpg",
        "price": 11.49
    },
    {
        "title": "Walking Red Flag (Ocean View Series Book 2)",
        "author": "Morgan Elizabeth",
        "imgUrl": "https://m.media-amazon.com/images/I/71msFvQjHVL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "What Makes Love Last?: How to Build Trust and Avoid Betrayal",
        "author": "John Gottman PhD",
        "imgUrl": "https://m.media-amazon.com/images/I/617+VPNPGyL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Just The Way You Are: The TOP 10 bestselling, uplifting, feel-good read",
        "author": "Beth Moran",
        "imgUrl": "https://m.media-amazon.com/images/I/81veMFDmSAL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Year of Yes: How to Dance It Out, Stand In the Sun and Be Your Own Person",
        "author": "Shonda Rhimes",
        "imgUrl": "https://m.media-amazon.com/images/I/719wWSMwBDL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Connection: A Single Mom Springbrook Hills Romance (Springbrook Hills Series Book 4)",
        "author": "Morgan Elizabeth",
        "imgUrl": "https://m.media-amazon.com/images/I/71dbWUO+epL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Smart but Scattered: The Revolutionary \"Executive Skills\" Approach to Helping Kids Reach Their Potential",
        "author": "Peg Dawson",
        "imgUrl": "https://m.media-amazon.com/images/I/81NEDzc8TsL._AC_UY218_.jpg",
        "price": 9.15
    },
    {
        "title": "Secret Twins for Dr. Grump: A Second Chance Billionaire Romance",
        "author": "Jessi Jade",
        "imgUrl": "https://m.media-amazon.com/images/I/81l81Y8O0QL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "An Only Child and Her Sister",
        "author": "Casey Maxwell Clair",
        "imgUrl": "https://m.media-amazon.com/images/I/61fu2fzqGAL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The Happy Sleeper: The Science-Backed Guide to Helping Your Baby Get a Good Night's Sleep-Newborn to School Age",
        "author": "Heather Turgeon",
        "imgUrl": "https://m.media-amazon.com/images/I/81nYrDiI0cL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Fine Art of Small Talk: How to Start a Conversation, Keep It Going, Build Networking Skills -- and Leave a Positive Impression!",
        "author": "Debra Fine",
        "imgUrl": "https://m.media-amazon.com/images/I/71I0ISn1UTL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "How to Raise an Adult: Break Free of the Overparenting Trap and Prepare Your Kid for Success",
        "author": "Julie Lythcott-Haims",
        "imgUrl": "https://m.media-amazon.com/images/I/81-8Nbcsi-L._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Your Soul Contract Decoded: Discovering the Spiritual Map Of Your Life With Numerology",
        "author": "Nicolas David Ngan",
        "imgUrl": "https://m.media-amazon.com/images/I/51eu6qXbSpL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Never Too Late: A heartwarming escapist holiday romance (Beneath Italian Skies Book 1)",
        "author": "T.A. Williams",
        "imgUrl": "https://m.media-amazon.com/images/I/81UPyBu8TPL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "A Limited Run",
        "author": "Karen McQuestion",
        "imgUrl": "https://m.media-amazon.com/images/I/81CeKWUudPL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Solo quiero que sepas: Lo que hemos aprendido y descubierto acerca de las relaciones amorosas (Spanish Edition)",
        "author": "Andr\u00e9s Spyker",
        "imgUrl": "https://m.media-amazon.com/images/I/713J52j3iXL._AC_UY218_.jpg",
        "price": 8.99
    },
    {
        "title": "The 5 Love Languages of Children: The Secret to Loving Children Effectively",
        "author": "Gary Chapman",
        "imgUrl": "https://m.media-amazon.com/images/I/91UZxUg9tDL._AC_UY218_.jpg",
        "price": 6.7
    },
    {
        "title": "A Fond Farewell for the Tobacco Girls: The BRAND NEW gripping historical family saga from Lizzie Lane for 2023",
        "author": "Lizzie Lane",
        "imgUrl": "https://m.media-amazon.com/images/I/81S5gci1PEL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "Caring for Your Baby and Young Child: Birth to Age 5",
        "author": "David L. Hill MD FAAP",
        "imgUrl": "https://m.media-amazon.com/images/I/81vCF1iZEML._AC_UY218_.jpg",
        "price": 18.49
    },
    {
        "title": "In Each Other's Care: A Guide to the Most Common Relationship Conflicts and How to Work Through Them",
        "author": "MFT Tatkin, Stan, PsyD",
        "imgUrl": "https://m.media-amazon.com/images/I/71f8gzi5XFL._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "I Feel Bad About My Neck",
        "author": "Nora Ephron",
        "imgUrl": "https://m.media-amazon.com/images/I/71A1ORnIvrL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Rainbow Comes and Goes: A Mother and Son on Life, Love, and Loss",
        "author": "Anderson Cooper",
        "imgUrl": "https://m.media-amazon.com/images/I/91NgS3jFXRL._AC_UY218_.jpg",
        "price": 13.49
    },
    {
        "title": "The Danish Way of Parenting: What the Happiest People in the World Know About Raising Confident, Capable Kids",
        "author": "Jessica Joelle Alexander",
        "imgUrl": "https://m.media-amazon.com/images/I/71Col2oSjFL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Reading Children\u2019s Literature: A Critical Introduction - Second Edition",
        "author": "Carrie Hintz",
        "imgUrl": "https://m.media-amazon.com/images/I/817uXHHFJ3L._AC_UY218_.jpg",
        "price": 51.99
    },
    {
        "title": "Moms on Call | Toddler Book 15 Months-4 Years | Parenting Book 3 of 3 (Moms On Call Parenting Books)",
        "author": "Jennifer Walker RN BSN",
        "imgUrl": "https://m.media-amazon.com/images/I/81IWcTiFvkL._AC_UY218_.jpg",
        "price": 24.99
    },
    {
        "title": "The Wisdom of Morrie: Living and Aging Creatively and Joyfully",
        "author": "Morrie Schwartz",
        "imgUrl": "https://m.media-amazon.com/images/I/819k2T4oWZL._AC_UY218_.jpg",
        "price": 8.99
    },
    {
        "title": "Billionaire Bossa Nova: An Enemies to Lovers Romance Box Set",
        "author": "Zara Kingston",
        "imgUrl": "https://m.media-amazon.com/images/I/71stz2CxsPL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Bossy Grump's Secret: An Enemies To Lovers Pregnancy Romance",
        "author": "Sylvia Rae",
        "imgUrl": "https://m.media-amazon.com/images/I/71zXdvsn6OL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "A Sparkling Deceit: Clean Sweep Cozy Mysteries",
        "author": "Dianne Harman",
        "imgUrl": "https://m.media-amazon.com/images/I/817qrzfKuzL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "\"My Husband's Trying to Kill Me!\": A True Story of Money, Marriage, and Murderous Intent",
        "author": "Jim Schutze",
        "imgUrl": "https://m.media-amazon.com/images/I/81Uef9+0XJL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Wild Things: The Art of Nurturing Boys",
        "author": "Stephen James",
        "imgUrl": "https://m.media-amazon.com/images/I/91c3zpDfs1L._AC_UY218_.jpg",
        "price": 12.15
    },
    {
        "title": "Parenting from the Inside Out: How a Deeper Self-Understanding Can Help You Raise Children Who Thrive: 10th Anniversary Edition",
        "author": "Daniel J. Siegel",
        "imgUrl": "https://m.media-amazon.com/images/I/71OWjydBLCL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Emotionally Healthy Relationships Day by Day: A 40-Day Journey to Deeply Change Your Relationships",
        "author": "Peter Scazzero",
        "imgUrl": "https://m.media-amazon.com/images/I/71ssZSKa8AL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Walking Shoes: Small Town Family Saga (Mt. Hope Southern Adventures Book 1)",
        "author": "Lynne Gentry",
        "imgUrl": "https://m.media-amazon.com/images/I/81mYw7cd9dL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Seeing God as a Perfect Father: and Seeing You as Loved, Pursued, and Secure",
        "author": "Louie Giglio",
        "imgUrl": "https://m.media-amazon.com/images/I/51fAMoB3DNL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Just This Once: A Rugby Romance (Escape to New Zealand Book 1)",
        "author": "Rosalind James",
        "imgUrl": "https://m.media-amazon.com/images/I/91MsYjGherL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Last Place You Look: A gripping police procedural crime thriller (Butler & West Book 1)",
        "author": "Louisa Scarr",
        "imgUrl": "https://m.media-amazon.com/images/I/91--w8I0tNL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "On Death and Dying: What the Dying Have to Teach Doctors, Nurses, Clergy and Their Own Families",
        "author": "Elisabeth Kubler-Ross",
        "imgUrl": "https://m.media-amazon.com/images/I/71gIVJ+OPIL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Toxic Parents: Overcoming Their Hurtful Legacy and Reclaiming Your Life",
        "author": "Susan Forward",
        "imgUrl": "https://m.media-amazon.com/images/I/719ntdHVl1L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Heart of Devin Mackade (MacKade Brothers Book 3)",
        "author": "Nora Roberts",
        "imgUrl": "https://m.media-amazon.com/images/I/91w1oZFVe3L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Silicon Valley Cozy Mystery Series Box Set: Books 1-3 (Silicon Valley Cozy Mysteries Box Set Book 1)",
        "author": "Marc Jedel",
        "imgUrl": "https://m.media-amazon.com/images/I/71yAZN4VO7L._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "The Parenting Map: Step-by-Step Solutions to Consciously Create the Ultimate Parent-Child Relationship",
        "author": "Dr. Shefali Tsabary",
        "imgUrl": "https://m.media-amazon.com/images/I/71vGSCfUfmL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Townie: A Memoir",
        "author": "Andre Dubus III",
        "imgUrl": "https://m.media-amazon.com/images/I/519eZvlQlML._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Let It Go: Downsizing Your Way to a Richer, Happier Life",
        "author": "Peter Walsh",
        "imgUrl": "https://m.media-amazon.com/images/I/71ZG0QnARyL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Old Friends Reunited: The laugh-out-loud feel-good read from #1 bestseller Maddie Please",
        "author": "Maddie Please",
        "imgUrl": "https://m.media-amazon.com/images/I/819z7N63stL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "She's Not There: A Life in Two Genders",
        "author": "Jennifer Finney Boylan",
        "imgUrl": "https://m.media-amazon.com/images/I/81cMZJjc2+L._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Before We Grow Old: The love story that everyone will be talking about",
        "author": "Clare Swatman",
        "imgUrl": "https://m.media-amazon.com/images/I/71XrG9gHptL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The Like Switch: An Ex-FBI Agent's Guide to Influencing, Attracting, and Winning People Over (The Like Switch Series Book 1)",
        "author": "Jack Schafer",
        "imgUrl": "https://m.media-amazon.com/images/I/71sMtbZlP0L._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Brainstorm: The Power and Purpose of the Teenage Brain",
        "author": "Daniel J. Siegel",
        "imgUrl": "https://m.media-amazon.com/images/I/81IlHg1jAEL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Children with Disabilities",
        "author": "Mark Batshaw M.D.",
        "imgUrl": "https://m.media-amazon.com/images/I/716WdbB9d4L._AC_UY218_.jpg",
        "price": 64.99
    },
    {
        "title": "The Verbally Abusive Relationship, Expanded Third Edition: How to recognize it and how to respond",
        "author": "Patricia Evans",
        "imgUrl": "https://m.media-amazon.com/images/I/810c0KSKGYL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "I Adopted My Mom at the Bus Station",
        "author": "Savannah Hendricks",
        "imgUrl": "https://m.media-amazon.com/images/I/9180lOeL1BL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Say What You Mean: A Mindful Approach to Nonviolent Communication",
        "author": "Oren Jay Sofer",
        "imgUrl": "https://m.media-amazon.com/images/I/81AqY4YHasL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Splitting: Protecting Yourself While Divorcing Someone with Borderline or Narcissistic Personality Disorder",
        "author": "Bill Eddy",
        "imgUrl": "https://m.media-amazon.com/images/I/81sjdZqUXCS._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Conscious Parent",
        "author": "Dr. Shefali Tsabary",
        "imgUrl": "https://m.media-amazon.com/images/I/71E54CcoGiL._AC_UY218_.jpg",
        "price": 9.95
    },
    {
        "title": "The Reason I Jump: The Inner Voice of a Thirteen-Year-Old Boy with Autism",
        "author": "Naoki Higashida",
        "imgUrl": "https://m.media-amazon.com/images/I/A1H82FTd00L._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Fourteen Talks by Age Fourteen: The Essential Conversations You Need to Have with Your Kids Before They Start High School",
        "author": "Michelle Icard",
        "imgUrl": "https://m.media-amazon.com/images/I/717tqVrdaUL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "There's No Such Thing as Bad Weather: A Scandinavian Mom's Secrets for Raising Healthy, Resilient, and Confident Kids (from Friluftsliv to Hygge)",
        "author": "Linda \u00c5keson McGurk",
        "imgUrl": "https://m.media-amazon.com/images/I/71sKcCV2dtL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Opening Up: A Guide To Creating and Sustaining Open Relationships",
        "author": "Tristan Taormino",
        "imgUrl": "https://m.media-amazon.com/images/I/71H6aM6nWYL._AC_UY218_.jpg",
        "price": 13.49
    },
    {
        "title": "The Pride of Jared MacKade (MacKade Brothers Book 2)",
        "author": "Nora Roberts",
        "imgUrl": "https://m.media-amazon.com/images/I/91gELS71Q-L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Honey, Baby, Mine: A Mother and Daughter Talk Life, Death, Love (and Banana Pudding)",
        "author": "Laura Dern",
        "imgUrl": "https://m.media-amazon.com/images/I/91wffuIP3lL._AC_UY218_.jpg",
        "price": 15.99
    },
    {
        "title": "Charlie's Secret: Inspired by a true story (Samantha Mallon Book 1)",
        "author": "C. L. Heckman",
        "imgUrl": "https://m.media-amazon.com/images/I/81gp4gEbAlL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "We Are Too Many: A Memoir [Kind of]",
        "author": "Hannah Pittard",
        "imgUrl": "https://m.media-amazon.com/images/I/71D32aHcnhL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Remaining You While Raising Them: The Secret Art of Confident Motherhood",
        "author": "Alli Worthington",
        "imgUrl": "https://m.media-amazon.com/images/I/713h-ToOaFL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Period Power: Harness Your Hormones and Get Your Cycle Working For You",
        "author": "Maisie Hill",
        "imgUrl": "https://m.media-amazon.com/images/I/61eBji9qHwL._AC_UY218_.jpg",
        "price": 14.43
    },
    {
        "title": "Finding Meaning: The Sixth Stage of Grief",
        "author": "David Kessler",
        "imgUrl": "https://m.media-amazon.com/images/I/71034HAdHLL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "And Every Morning the Way Home Gets Longer and Longer: A Novella",
        "author": "Fredrik Backman",
        "imgUrl": "https://m.media-amazon.com/images/I/81M0BUIDFLL._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Getting Past Your Breakup: How to Turn a Devastating Loss into the Best Thing That Ever Happened to You",
        "author": "Susan J. Elliott",
        "imgUrl": "https://m.media-amazon.com/images/I/71s+3mfKJEL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Embodied: Transgender Identities, the Church, and What the Bible Has to Say",
        "author": "Preston M. Sprinkle",
        "imgUrl": "https://m.media-amazon.com/images/I/91TriVLSAbL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Women and Girls with Autism Spectrum Disorder: Understanding Life Experiences from Early Childhood to Old Age",
        "author": "Sarah Hendrickx",
        "imgUrl": "https://m.media-amazon.com/images/I/51RnqcyMPpL._AC_UY218_.jpg",
        "price": 14.72
    },
    {
        "title": "Fathered by God: Learning What Your Dad Could Never Teach You",
        "author": "John Eldredge",
        "imgUrl": "https://m.media-amazon.com/images/I/91Xged4hKgL._AC_UY218_.jpg",
        "price": 12.49
    },
    {
        "title": "Spirit Babies: How to Communicate with the Child You're Meant to Have",
        "author": "Walter Makichen",
        "imgUrl": "https://m.media-amazon.com/images/I/51gBbqwEBZL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Assertiveness Workbook: How to Express Your Ideas and Stand Up for Yourself at Work and in Relationships",
        "author": "Randy J. Paterson",
        "imgUrl": "https://m.media-amazon.com/images/I/71MfZXTZN3L._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Infancy: Development from Birth to Age 3",
        "author": "Dana Gross",
        "imgUrl": "https://m.media-amazon.com/images/I/71pkSoXgsuL._AC_UY218_.jpg",
        "price": 77.42
    },
    {
        "title": "Loving Your Spouse When You Feel Like Walking Away: Real Help for Desperate Hearts in Difficult Marriages",
        "author": "Gary Chapman",
        "imgUrl": "https://m.media-amazon.com/images/I/716-CdVVR9L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Don't Call Me Home: A Memoir",
        "author": "Alexandra Auder",
        "imgUrl": "https://m.media-amazon.com/images/I/71zd9JurMZL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Forever Home: GRAHAM NORTON'S NEW DARK COMEDY",
        "author": "Graham Norton",
        "imgUrl": "https://m.media-amazon.com/images/I/7103PqWqlFL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "The Vaccine Book: Making the Right Decision for Your Child (Sears Parenting Library)",
        "author": "Robert Sears MD",
        "imgUrl": "https://m.media-amazon.com/images/I/71r3EN481WL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Finding Home: Book 1 of the Rollin On Series",
        "author": "Emilia Finn",
        "imgUrl": "https://m.media-amazon.com/images/I/91gccf-QCwL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Dibs: In Search of Self",
        "author": "Virginia M. Axline",
        "imgUrl": "https://m.media-amazon.com/images/I/91eZD9godPL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Simple & Safe Baby-Led Weaning: How to Integrate Foods, Master Portion Sizes, and Identify Allergies",
        "author": "Malina Malkani MS RDN CDN",
        "imgUrl": "https://m.media-amazon.com/images/I/81KnEXrG8aL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "If Walls Could Talk: An Intimate History of the Home",
        "author": "Lucy Worsley",
        "imgUrl": "https://m.media-amazon.com/images/I/91d79lLuq7L._AC_UY218_.jpg",
        "price": 14.4
    },
    {
        "title": "No Visible Bruises: What We Don\u2019t Know About Domestic Violence Can Kill Us",
        "author": "Rachel Louise Snyder",
        "imgUrl": "https://m.media-amazon.com/images/I/715zxTVCLnL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "It Was an Ugly Couch Anyway: And Other Thoughts on Moving Forward",
        "author": "Elizabeth Passarella",
        "imgUrl": "https://m.media-amazon.com/images/I/91sXVruQRgL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "The Summer Wind (Lowcountry Summer Book 2)",
        "author": "Mary Alice Monroe",
        "imgUrl": "https://m.media-amazon.com/images/I/81XpWxfqR3L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "How to Talk to Anyone About Anything: Improve Your Social Skills, Master Small Talk, Connect Effortlessly, and Make Real Friends (Communication Skills Training Book 1)",
        "author": "James W. Williams",
        "imgUrl": "https://m.media-amazon.com/images/I/81q54ipVDQL._AC_UY218_.jpg",
        "price": 9.97
    },
    {
        "title": "Raising Worry-Free Girls: Helping Your Daughter Feel Braver, Stronger, and Smarter in an Anxious World",
        "author": "Sissy Goff",
        "imgUrl": "https://m.media-amazon.com/images/I/81PGFN9SEzL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "Healing from Infidelity: The Divorce Busting\u00ae Guide to Rebuilding Your Marriage After an Affair",
        "author": "Michele Weiner-Davis",
        "imgUrl": "https://m.media-amazon.com/images/I/81DQdu2ksvL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Ghost Boy: The Miraculous Escape of a Misdiagnosed Boy Trapped Inside His Own Body",
        "author": "Martin Pistorius",
        "imgUrl": "https://m.media-amazon.com/images/I/81aTTWbnjDL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Women Without Kids: The Revolutionary Rise of an Unsung Sisterhood",
        "author": "Ruby Warrington",
        "imgUrl": "https://m.media-amazon.com/images/I/71bjvm9R+vL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "What I Mean When I Say I'm Autistic: Unpuzzling a Life on the Autism Spectrum",
        "author": "Annie Kotowicz",
        "imgUrl": "https://m.media-amazon.com/images/I/71EiCY9jLKL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Revelation: A Memoir of Deep Family Secrets, Discovery, and Identity",
        "author": "Richard (Rick) Gary Kaye",
        "imgUrl": "https://m.media-amazon.com/images/I/71Q2Z4n0F2L._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "The Best of Me",
        "author": "David Sedaris",
        "imgUrl": "https://m.media-amazon.com/images/I/81pC9MQ65jL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "An Italian Dream: An escapist read from the bestselling author of One Greek Summer",
        "author": "Kate Frost",
        "imgUrl": "https://m.media-amazon.com/images/I/91YeFSweeoL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Raising Conservative Kids in a Woke City: Teaching Historical, Economic, and Biological Truth in a World of Lies",
        "author": "Stacy Manning",
        "imgUrl": "https://m.media-amazon.com/images/I/71ggYKR0oUL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "How to Stop Losing Your Sh*t with Your Kids: A Practical Guide to Becoming a Calmer, Happier Parent",
        "author": "Carla Naumburg",
        "imgUrl": "https://m.media-amazon.com/images/I/81D6KsXxCjL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "Pretty Ugly Promises",
        "author": "C.W. Farnsworth",
        "imgUrl": "https://m.media-amazon.com/images/I/91xQiNpImaL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Momfluenced: Inside the Maddening, Picture-Perfect World of Mommy Influencer Culture",
        "author": "Sara Petersen",
        "imgUrl": "https://m.media-amazon.com/images/I/715vjUm-8jL._AC_UY218_.jpg",
        "price": 16.99
    },
    {
        "title": "Loving Someone with Borderline Personality Disorder: How to Keep Out-of-Control Emotions from Destroying Your Relationship",
        "author": "Shari Y. Manning",
        "imgUrl": "https://m.media-amazon.com/images/I/81mXEYfNWYL._AC_UY218_.jpg",
        "price": 9.32
    },
    {
        "title": "An Unusual Boy: The unforgettable, heart-stopping book club read from USA Today Bestseller Fiona Higgins",
        "author": "Fiona Higgins",
        "imgUrl": "https://m.media-amazon.com/images/I/81KZMPpJwBL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Is It You, Me, or Adult A.D.D.?: Stopping the Roller Coaster When Someone You Love Has Attention Deficit Disorder",
        "author": "Gina Pera",
        "imgUrl": "https://m.media-amazon.com/images/I/91l-At6WUqL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Lost Luggage: The perfect uplifting, feel-good read from Samantha Tonge, author of Under One Roof",
        "author": "Samantha Tonge",
        "imgUrl": "https://m.media-amazon.com/images/I/71DmPnwqJiL._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "The Baby Sleep Solution: A Proven Program to Teach Your Baby to Sleep Twelve Hours aNight",
        "author": "Suzy Giordano",
        "imgUrl": "https://m.media-amazon.com/images/I/71+D3tGXJsL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Life After You: A heart-warming Irish story of love, loss and family",
        "author": "Sian O'Gorman",
        "imgUrl": "https://m.media-amazon.com/images/I/81t6IOE52QL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Everyday Utopia: What 2,000 Years of Wild Experiments Can Teach Us About the Good Life",
        "author": "Kristen R. Ghodsee",
        "imgUrl": "https://m.media-amazon.com/images/I/61THkTv2HVL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "The Complete Guide to Asperger's Syndrome",
        "author": "Dr Anthony Attwood",
        "imgUrl": "https://m.media-amazon.com/images/I/814fQ+wntlL._AC_UY218_.jpg",
        "price": 16.17
    },
    {
        "title": "I Love You But I Don't Trust You: The Complete Guide to Restoring Trust in Your Relationship",
        "author": "Mira Kirshenbaum",
        "imgUrl": "https://m.media-amazon.com/images/I/41JwIt9giXL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Finally Focused: The Breakthrough Natural Treatment Plan for ADHD That Restores Attention, Minimizes Hyperactivity, and Helps Eliminate Drug Side Effects",
        "author": "James Greenblatt",
        "imgUrl": "https://m.media-amazon.com/images/I/91KWANvwfaL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Creating a Life That Matters: How to Live and Love with Meaning and Purpose",
        "author": "Manis Friedman",
        "imgUrl": "https://m.media-amazon.com/images/I/711vbGYT8nL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Secrets of Ashmore Castle: a gripping and emotional historical drama for fans of DOWNTON ABBEY",
        "author": "Cynthia Harrod-Eagles",
        "imgUrl": "https://m.media-amazon.com/images/I/81IufDmbyYL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "Indistractable: How to Control Your Attention and Choose Your Life",
        "author": "Nir Eyal",
        "imgUrl": "https://m.media-amazon.com/images/I/71j2zOlO6ZL._AC_UY218_.jpg",
        "price": 0.0
    },
    {
        "title": "The Mini ADHD Coach: Tools and Support to Make Life Easier\u2014A Visual Guide",
        "author": "Alice Gendron",
        "imgUrl": "https://m.media-amazon.com/images/I/714r3b7TqpL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "The Willberry Inn (An Oak Harbor Series Book 1)",
        "author": "Kimberly Thomas",
        "imgUrl": "https://m.media-amazon.com/images/I/81SDA12l81L._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "The Highland Hens: The brand new uplifting, feel-good read from Judy Leigh",
        "author": "Judy Leigh",
        "imgUrl": "https://m.media-amazon.com/images/I/81DbAuZCx-L._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Brain Rules for Baby (Updated and Expanded): How to Raise a Smart and Happy Child from Zero to Five",
        "author": "John Medina",
        "imgUrl": "https://m.media-amazon.com/images/I/81QymV+MZeL._AC_UY218_.jpg",
        "price": 11.3
    },
    {
        "title": "The Fall of Shane Mackade (MacKade Brothers Book 4)",
        "author": "Nora Roberts",
        "imgUrl": "https://m.media-amazon.com/images/I/91DweQhUFiL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The House Called Mbabati: A Novel Out of Africa",
        "author": "Samantha Ford",
        "imgUrl": "https://m.media-amazon.com/images/I/91kxkhYeCJL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "I'll Show Myself Out: Essays on Midlife and Motherhood",
        "author": "Jessi Klein",
        "imgUrl": "https://m.media-amazon.com/images/I/714vv1T7weL._AC_UY218_.jpg",
        "price": 14.49
    },
    {
        "title": "High Conflict: Why We Get Trapped and How We Get Out",
        "author": "Amanda Ripley",
        "imgUrl": "https://m.media-amazon.com/images/I/81f6l7rFIAL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Paint Me Perfect (Love, Me & the 303)",
        "author": "Kay Cove",
        "imgUrl": "https://m.media-amazon.com/images/I/814VKLr42RL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "FROM PEOPLE PLEASER TO SOUL PLEASER: Six Steps to Being Who You are Meant to Be",
        "author": "Tracy Secombe",
        "imgUrl": "https://m.media-amazon.com/images/I/915V28zgRIL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "Nurture: A Modern Guide to Pregnancy, Birth, Early Motherhood\u2014and Trusting Yourself and Your Body",
        "author": "Erica Chidi Cohen",
        "imgUrl": "https://m.media-amazon.com/images/I/91BYYVl2csL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Growing Up in Public: Coming of Age in a Digital World",
        "author": "Devorah Heitner",
        "imgUrl": "https://m.media-amazon.com/images/I/719hyZKbuGL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Unthinkable: Trauma, Truth, and the Trials of American Democracy",
        "author": "Jamie Raskin",
        "imgUrl": "https://m.media-amazon.com/images/I/81H22sggWVL._AC_UY218_.jpg",
        "price": 13.49
    },
    {
        "title": "Three Weeks with My Brother",
        "author": "Nicholas Sparks",
        "imgUrl": "https://m.media-amazon.com/images/I/91dwTi+NZFL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Christmas Every Day: The perfect uplifting festive read",
        "author": "Beth Moran",
        "imgUrl": "https://m.media-amazon.com/images/I/81pLxvWUZlL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Unstoppable Self Confidence: How to create the indestructible, natural confidence of the 1% who achieve their goals, create success on demand and live life on their terms",
        "author": "Andrew Leedham",
        "imgUrl": "https://m.media-amazon.com/images/I/71wYPZWiE+L._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "The Anxious Person\u2019s Guide to Non-Monogamy: Your Guide to Open Relationships, Polyamory and Letting Go",
        "author": "Lola Phoenix",
        "imgUrl": "https://m.media-amazon.com/images/I/71GK9XdCe4L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Hunger: A Memoir of (My) Body",
        "author": "Roxane Gay",
        "imgUrl": "https://m.media-amazon.com/images/I/71TQLLewTwL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Stupid Things I Won't Do When I Get Old: A Highly Judgmental, Unapologetically Honest Accounting of All the Things Our Elders Are Doing Wrong",
        "author": "Steven Petrow",
        "imgUrl": "https://m.media-amazon.com/images/I/81OSeMUS0bL._AC_UY218_.jpg",
        "price": 12.49
    },
    {
        "title": "The New Codependency: Help and Guidance for Today's Generation",
        "author": "Melody Beattie",
        "imgUrl": "https://m.media-amazon.com/images/I/71ifLchLn6L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Emotional Blackmail: When the People in Your Life Use Fear, Obligation, and Guilt to Manipulate You",
        "author": "Susan Forward",
        "imgUrl": "https://m.media-amazon.com/images/I/71jnEQiBdNL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "The Office BFFs: Tales of The Office from Two Best Friends Who Were There",
        "author": "Jenna Fischer",
        "imgUrl": "https://m.media-amazon.com/images/I/71JzS4kOqnL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Ms. Bitch: Finding happiness is the best revenge.",
        "author": "Tricia O'Malley",
        "imgUrl": "https://m.media-amazon.com/images/I/81N5gSudBEL._AC_UY218_.jpg",
        "price": 6.99
    },
    {
        "title": "Keep the Memories, Lose the Stuff: Declutter, Downsize, and Move Forward with Your Life",
        "author": "Matt Paxton",
        "imgUrl": "https://m.media-amazon.com/images/I/71xl3v2YwNL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Path Between Us: An Enneagram Journey to Healthy Relationships",
        "author": "Suzanne Stabile",
        "imgUrl": "https://m.media-amazon.com/images/I/819V+JAssdL._AC_UY218_.jpg",
        "price": 13.77
    },
    {
        "title": "Friends Like Us: An emotional Irish page-turner about love and friendship",
        "author": "Sian O'Gorman",
        "imgUrl": "https://m.media-amazon.com/images/I/81wy2TN0xPL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The High-Conflict Couple: A Dialectical Behavior Therapy Guide to Finding Peace, Intimacy, and Validation",
        "author": "Alan E. Fruzzetti",
        "imgUrl": "https://m.media-amazon.com/images/I/71TCgufmJyL._AC_UY218_.jpg",
        "price": 10.99
    },
    {
        "title": "The Secrets of Hawthorn Place: A heartfelt and charming dual-time story of the power of love",
        "author": "Jenni Keer",
        "imgUrl": "https://m.media-amazon.com/images/I/91GKxNKavWS._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Stop Walking on Eggshells for Parents: How to Help Your Child (of Any Age) with Borderline Personality Disorder without Losing Yourself",
        "author": "Randi Kreger",
        "imgUrl": "https://m.media-amazon.com/images/I/71TnYZHlnSL._AC_UY218_.jpg",
        "price": 11.49
    },
    {
        "title": "Biased: Uncovering the Hidden Prejudice That Shapes What We See, Think, and Do",
        "author": "Jennifer L. Eberhardt",
        "imgUrl": "https://m.media-amazon.com/images/I/71BkUjo+yrL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "The Power of Showing Up: How Parental Presence Shapes Who Our Kids Become and How Their Brains Get Wired",
        "author": "Daniel J. Siegel",
        "imgUrl": "https://m.media-amazon.com/images/I/71lkLQhUDSL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Truth and Repair: How Trauma Survivors Envision Justice",
        "author": "Judith Lewis Herman MD",
        "imgUrl": "https://m.media-amazon.com/images/I/91jhz4YcSSL._AC_UY218_.jpg",
        "price": 17.99
    },
    {
        "title": "Finding Chika: A Little Girl, an Earthquake, and the Making of a Family",
        "author": "Mitch Albom",
        "imgUrl": "https://m.media-amazon.com/images/I/71bQQtx4OVL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Strong Fathers, Strong Daughters: 10 Secrets Every Father Should Know",
        "author": "Meg Meeker",
        "imgUrl": "https://m.media-amazon.com/images/I/71p-uOA09yL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The Lost Notebook: THE NUMBER ONE BESTSELLER",
        "author": "Louise Douglas",
        "imgUrl": "https://m.media-amazon.com/images/I/71Fgano9UAL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Baby Bank: A Lesbian Romantic Comedy (Queerly Devoted Book 1)",
        "author": "Sarah Robinson",
        "imgUrl": "https://m.media-amazon.com/images/I/71MkWR6QdaL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Exploring Lifespan Development",
        "author": "Laura E. Berk",
        "imgUrl": "https://m.media-amazon.com/images/I/A180zLaNOWL._AC_UY218_.jpg",
        "price": 52.52
    },
    {
        "title": "sparkle & GRIT: Live a Technicolor Life By Finally Finding Balance, Escaping Monotony, and Beating Burnout",
        "author": "Wendy Meadows",
        "imgUrl": "https://m.media-amazon.com/images/I/71YQKWuSjML._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "The New Strong-Willed Child",
        "author": "James C. Dobson",
        "imgUrl": "https://m.media-amazon.com/images/I/81BFqnIlD2L._AC_UY218_.jpg",
        "price": 10.44
    },
    {
        "title": "His Secret Wife: An explosive and heartbreaking family drama novel for 2023",
        "author": "Lisa Timoney",
        "imgUrl": "https://m.media-amazon.com/images/I/71MmlZvDBxL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Wildflower: A Tale of Transcendence",
        "author": "Dr. Teresa Van Woy",
        "imgUrl": "https://m.media-amazon.com/images/I/716ks95VHYL._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "Just Date and See: The laugh-out-loud romantic comedy from Portia MacIntosh",
        "author": "Portia MacIntosh",
        "imgUrl": "https://m.media-amazon.com/images/I/71HootajmXL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Letting Go of Your Ex: CBT Skills to Heal the Pain of a Breakup and Overcome Love Addiction",
        "author": "Cortney S. Warren",
        "imgUrl": "https://m.media-amazon.com/images/I/71N7RZFR0yL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Mothers Who Can't Love: A Healing Guide for Daughters",
        "author": "Susan Forward",
        "imgUrl": "https://m.media-amazon.com/images/I/81UNmqeRw1L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Family and Intimate Partner Violence: Heavy Hands (What's New in Criminal Justice)",
        "author": "Denise Kindschi Gosselin",
        "imgUrl": "https://m.media-amazon.com/images/I/61lGtmaxIJL._AC_UY218_.jpg",
        "price": 74.99
    },
    {
        "title": "The Newport Inn: The Complete Series (Newport Cove)",
        "author": "Clare Keyes",
        "imgUrl": "https://m.media-amazon.com/images/I/81qLcKq-C7S._AC_UY218_.jpg",
        "price": 0.99
    },
    {
        "title": "Mothers and Daughters: A beautiful Irish uplifting family drama of love, life and destiny",
        "author": "Sian O'Gorman",
        "imgUrl": "https://m.media-amazon.com/images/I/81cfpWOWfIL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "The 5 Apology Languages: The Secret to Healthy Relationships",
        "author": "Gary Chapman",
        "imgUrl": "https://m.media-amazon.com/images/I/71UOx2DXk0L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Somewhere Sisters: A Story of Adoption, Identity, and the Meaning of Family",
        "author": "Erika Hayasaki",
        "imgUrl": "https://m.media-amazon.com/images/I/91tae44UqDL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Praying the Scriptures for Your Adult Children: Trusting God with the Ones You Love",
        "author": "Jodie Berndt",
        "imgUrl": "https://m.media-amazon.com/images/I/81Ilxo9jfxL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "A Mother's Secret: The heartbreaking, unforgettable new novel from Irish novelist Caroline Finnerty",
        "author": "Caroline Finnerty",
        "imgUrl": "https://m.media-amazon.com/images/I/81FRQvMy0LL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Anxious Attachment Recovery: Go From Being Clingy to Confident & Secure In Your Relationships (Break Free and Recover from Unhealthy Relationships)",
        "author": "Linda Hill",
        "imgUrl": "https://m.media-amazon.com/images/I/81n4aGDIKML._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "When Rabbit Howls",
        "author": "Truddi Chase",
        "imgUrl": "https://m.media-amazon.com/images/I/819H7WyPwXL._AC_UY218_.jpg",
        "price": 12.99
    },
    {
        "title": "Infants and Children: Prenatal Through Middle Childhood",
        "author": "Laura E. Berk",
        "imgUrl": "https://m.media-amazon.com/images/I/91HXfkybXKL._AC_UY218_.jpg",
        "price": 52.52
    },
    {
        "title": "Someone Else's Honeymoon: A laugh-out-loud, feel-good romantic comedy",
        "author": "Phoebe MacLeod",
        "imgUrl": "https://m.media-amazon.com/images/I/71dRzLtJ-AL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "POR QU\u00c9 LOS HOMBRES AMAN A LAS CABRONAS: Nueva Edici\u00f3n - Gu\u00eda Sencilla, Divertida y Picante Para el Juego de la Seducci\u00f3n (Spanish Edition)",
        "author": "Sherry Argov",
        "imgUrl": "https://m.media-amazon.com/images/I/71kwiARf4EL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Lil's Bus Trip: An uplifting, feel-good read from USA Today bestseller Judy Leigh",
        "author": "Judy Leigh",
        "imgUrl": "https://m.media-amazon.com/images/I/81Reqfq2KaS._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Sam's Truth: A sequel to Charlie's Secret: Inspired by a true story (Samantha Mallon Book 2)",
        "author": "C. L. Heckman",
        "imgUrl": "https://m.media-amazon.com/images/I/91Ucmx+9y7L._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Poeta chileno (Narrativas hisp\u00e1nicas n\u00ba 641) (Spanish Edition)",
        "author": "Alejandro Zambra",
        "imgUrl": "https://m.media-amazon.com/images/I/71eNkN7SWYL._AC_UY218_.jpg",
        "price": 8.79
    },
    {
        "title": "Did Ye Hear Mammy Died?: A Memoir",
        "author": "S\u00e9amas O'Reilly",
        "imgUrl": "https://m.media-amazon.com/images/I/81VmJKjCG6S._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Call Me Cockroach: Based on a True Story (Call Me Tuesday Series Book 2)",
        "author": "Leigh Byrne",
        "imgUrl": "https://m.media-amazon.com/images/I/91Z-+rAOQOL._AC_UY218_.jpg",
        "price": 4.99
    },
    {
        "title": "Thrivers: The Surprising Reasons Why Some Kids Struggle and Others Shine",
        "author": "Michele Borba",
        "imgUrl": "https://m.media-amazon.com/images/I/71PsspkDQtL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "Healing Hearts (An Oak Harbor Series Book 2)",
        "author": "Kimberly Thomas",
        "imgUrl": "https://m.media-amazon.com/images/I/71ENEInMW6L._AC_UY218_.jpg",
        "price": 5.99
    },
    {
        "title": "Theories of Childhood, Second Edition: An Introduction to Dewey, Montessori, Erikson, Piaget & Vygotsky",
        "author": "Carol Garhart Mooney",
        "imgUrl": "https://m.media-amazon.com/images/I/813yGG5jFpL._AC_UY218_.jpg",
        "price": 19.94
    },
    {
        "title": "The Out-of-Sync Child, Third Edition: Recognizing and Coping with Sensory Processing Differences (The Out-of-Sync Child Series)",
        "author": "Carol Stock Kranowitz",
        "imgUrl": "https://m.media-amazon.com/images/I/818pibpGkJL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "Transforming the Difficult Child: The Nurtured Heart Approach",
        "author": "Jennifer Easley",
        "imgUrl": "https://m.media-amazon.com/images/I/7103jZR6qcL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Las 5 heridas que impiden ser uno mismo (Autoayuda) (Spanish Edition)",
        "author": "Lise Bourbeau",
        "imgUrl": "https://m.media-amazon.com/images/I/71JaiokVvIL._AC_UY218_.jpg",
        "price": 8.99
    },
    {
        "title": "The Vanishing of Margaret Small: An uplifting and page-turning mystery",
        "author": "Neil Alexander",
        "imgUrl": "https://m.media-amazon.com/images/I/71ntzMRUvBL._AC_UY218_.jpg",
        "price": 2.49
    },
    {
        "title": "She Deserves Better: Raising Girls to Resist Toxic Teachings on Sex, Self, and Speaking Up (Biblically Grounded, Data-Driven Christian Parenting Principles ... Resilient, Confident, Discerning Daughters)",
        "author": "Sheila Wray Gregoire",
        "imgUrl": "https://m.media-amazon.com/images/I/71sRaWXFyxL._AC_UY218_.jpg",
        "price": 12.63
    },
    {
        "title": "Brain Health from Birth: Nurturing Brain Development During Pregnancy and the First Year (It Starts with the Egg Book 3)",
        "author": "Rebecca Fett",
        "imgUrl": "https://m.media-amazon.com/images/I/71a9BCqG+7L._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "4 Essential Keys to Effective Communication in Love, Life, Work--Anywhere!: A How-To Guide for Practicing the Empathic Listening, Speaking, and Dialogue Skills to Achieve Relationship Success",
        "author": "Bento C. Leal III",
        "imgUrl": "https://m.media-amazon.com/images/I/81NtRPj54aL._AC_UY218_.jpg",
        "price": 6.97
    },
    {
        "title": "Why Mommy Drinks",
        "author": "Gill Sims",
        "imgUrl": "https://m.media-amazon.com/images/I/81jb1KowKxL._AC_UY218_.jpg",
        "price": 9.0
    },
    {
        "title": "Preacher's Girl: The Life and Crimes of Blanche Taylor Moore",
        "author": "Jim Schutze",
        "imgUrl": "https://m.media-amazon.com/images/I/91CjNaCXbVL._AC_UY218_.jpg",
        "price": 8.99
    },
    {
        "title": "Declarative Language Handbook: Using a Thoughtful Language Style to Help Kids with Social Learning Challenges Feel Competent, Connected, and Understood",
        "author": "Linda K. Murphy",
        "imgUrl": "https://m.media-amazon.com/images/I/71cNIuIfOWL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Heart of Tantric Sex: A Unique Guide to Love and Sexual Fulfillment",
        "author": "Diana Richardson",
        "imgUrl": "https://m.media-amazon.com/images/I/51m1FuFfkOL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Succeeding With Adult ADHD: Daily Strategies to Help You Achieve Your Goals and Manage Your Life (APA LifeTools Series)",
        "author": "Abigail L. Levrini",
        "imgUrl": "https://m.media-amazon.com/images/I/71LsuN0pDzL._AC_UY218_.jpg",
        "price": 17.24
    },
    {
        "title": "Rocket Boys (The Coalwood Series #1)",
        "author": "Homer Hickam",
        "imgUrl": "https://m.media-amazon.com/images/I/91bML+W20hL._AC_UY218_.jpg",
        "price": 9.99
    },
    {
        "title": "Adult Children of Alcoholics: Expanded Edition",
        "author": "Janet G. Woititz",
        "imgUrl": "https://m.media-amazon.com/images/I/81Hux+5lkQL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "How to Help Your Child Clean Up Their Mental Mess: A Guide to Building Resilience and Managing Mental Health",
        "author": "Dr. Caroline Leaf",
        "imgUrl": "https://m.media-amazon.com/images/I/711mqqv4SrL._AC_UY218_.jpg",
        "price": 20.99
    },
    {
        "title": "The Human Magnet Syndrome: The Codependent Narcissist Trap",
        "author": "Ross Rosenberg",
        "imgUrl": "https://m.media-amazon.com/images/I/815rpXqx0VL._AC_UY218_.jpg",
        "price": 8.0
    },
    {
        "title": "The Journey from Abandonment to Healing: Revised and Updated: Surviving Through and Recovering from the Five Stages That Accompany the Loss of Love",
        "author": "Susan Anderson",
        "imgUrl": "https://m.media-amazon.com/images/I/81+bUKKtRLL._AC_UY218_.jpg",
        "price": 11.99
    },
    {
        "title": "The Family at No. 12: The explosive, addictive psychological thriller from Anita Waller",
        "author": "Anita Waller",
        "imgUrl": "https://m.media-amazon.com/images/I/81rICoZwLvL._AC_UY218_.jpg",
        "price": 1.99
    },
    {
        "title": "The Schoolteacher of Saint-Michel: inspired by true acts of courage, heartwrenching WW2 historical fiction",
        "author": "Sarah Steele",
        "imgUrl": "https://m.media-amazon.com/images/I/819qzCaV7cL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Me alegro de que mi madre haya muerto (Spanish Edition)",
        "author": "Jennette Mccurdy",
        "imgUrl": "https://m.media-amazon.com/images/I/715ZMgc2RbL._AC_UY218_.jpg",
        "price": 5.74
    },
    {
        "title": "You and Your Adult Child: How to Grow Together in Challenging Times",
        "author": "Laurence Steinberg",
        "imgUrl": "https://m.media-amazon.com/images/I/61EYOycoFnL._AC_UY218_.jpg",
        "price": 14.99
    },
    {
        "title": "PCOS Repair Protocol: The Complete Manual To Thriving With Polycystic Ovary Syndrome By Uncovering The Root Cause Of Your Symptoms",
        "author": "Tamika Woods",
        "imgUrl": "https://m.media-amazon.com/images/I/71h8AxywIcL._AC_UY218_.jpg",
        "price": 2.99
    },
    {
        "title": "Queen Bees and Wannabes, 3rd Edition: Helping Your Daughter Survive Cliques, Gossip, Boys, and the New Realities of Girl World",
        "author": "Rosalind Wiseman",
        "imgUrl": "https://m.media-amazon.com/images/I/81F30JVWakL._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Reviving Ophelia 25th Anniversary Edition: Saving the Selves of Adolescent Girls",
        "author": "Mary Pipher",
        "imgUrl": "https://m.media-amazon.com/images/I/81JI6iySpQL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "Beyond Codependency: And Getting Better All the Time",
        "author": "Melody Beattie",
        "imgUrl": "https://m.media-amazon.com/images/I/71SkWWFLb8L._AC_UY218_.jpg",
        "price": 13.99
    },
    {
        "title": "Awaken: 90 Days with the God Who Speaks",
        "author": "Priscilla Shirer",
        "imgUrl": "https://m.media-amazon.com/images/I/91CmoJnXz7L._AC_UY218_.jpg",
        "price": 12.25
    },
    {
        "title": "A Question of Sincerity",
        "author": "Sabrina Blaum",
        "imgUrl": "https://m.media-amazon.com/images/I/713JQiNr8OL._AC_UY218_.jpg",
        "price": 7.99
    },
    {
        "title": "Murder on Bainbridge Island: A Northwest Cozy Mystery (Northwest Cozy Mystery Series Book 1)",
        "author": "Dianne Harman",
        "imgUrl": "https://m.media-amazon.com/images/I/81GaLD8ge-L._AC_UY218_.jpg",
        "price": 3.99
    },
    {
        "title": "The Killing of Faith: \"An Incredible Suspense Thriller With A Mind-Blowing Ending.\" (The Killing of Faith Series Book 1)",
        "author": "William Holms",
        "imgUrl": "https://m.media-amazon.com/images/I/91omKsdnjdL._AC_UY218_.jpg",
        "price": 2.99
    }
]

export default data