import random
import json
import csv
from faker import Faker
from datetime import datetime, timedelta

fake = Faker()

# Configuration
NUM_ENTRIES = 1000  # Number of mock data entries to generate

# Define possible values for categorical fields
post_types = ["carousel", "reel", "static_image", "video"]
themes = [
    "travel",
    "food",
    "fitness",
    "fashion",
    "technology",
    "education",
    "entertainment",
    "personal",
    "business",
    "motivation",
    "sports",
    "art",
    "nature",
    "photography",
    "gaming",
    "events",
    "relationships",
    "books",
    "pets",
    "humor",
    "parenting",
    "lifestyle",
    "home_decor",
    "self_care",
    "technology_reviews",
    "music",
    "celebrity",
    "diary",
    "environment",
    "vlogs",
    "philanthropy",
    "startups",
    "trending"
]

hashtags_pool = [
    "#travel", "#wanderlust", "#adventure", "#explore", "#vacation", "#travelgram", "#instatravel", 
    "#roadtrip", "#beach", "#mountains", "#journey", "#traveldiaries", "#naturephotography", "#travelholic", 
    "#passport", "#backpacking", "#tourism", "#weekendgetaway", "#sunset", "#ocean", "#island", "#nationalparks",

    "#food", "#foodie", "#instafood", "#yummy", "#foodporn", "#homemade", "#delicious", "#cooking", 
    "#recipe", "#baking", "#dessert", "#snacks", "#healthyfood", "#foodlover", "#brunch", "#lunch", 
    "#dinner", "#breakfast", "#cheflife", "#streetfood", "#foodgasm", "#chocolate", "#pizza", "#coffee",

    "#fitness", "#workout", "#gym", "#fit", "#health", "#wellness", "#cardio", "#yoga", "#fitnessmotivation", 
    "#bodybuilding", "#strength", "#exercise", "#personaltrainer", "#running", "#crossfit", "#healthyliving", 
    "#weightloss", "#training", "#meditation", "#nutrition", "#active", "#stretching", "#pilates", "#selfcare",

    "#fashion", "#ootd", "#style", "#fashionista", "#fashionblogger", "#trendy", "#outfit", "#stylish", 
    "#streetwear", "#vintage", "#chic", "#accessories", "#beauty", "#makeup", "#shoes", "#handbags", 
    "#menswear", "#womensfashion", "#jewelry", "#luxury", "#design", "#wardrobe", "#summerstyle", "#winterfashion",

    "#technology", "#tech", "#innovation", "#gadgets", "#digital", "#science", "#future", "#robotics", 
    "#ai", "#machinelearning", "#coding", "#programming", "#developer", "#software", "#hardware", 
    "#cybersecurity", "#blockchain", "#startup", "#space", "#engineering", "#app", "#gamingtech", "#datatech",

    "#education", "#learning", "#study", "#knowledge", "#student", "#books", "#school", "#university", 
    "#onlinelearning", "#teacher", "#motivation", "#tutoring", "#career", "#reading", "#language", "#scienceclass", 
    "#homework", "#eLearning", "#success", "#lifelonglearning", "#skills", "#growth", "#college", "#training",

    "#entertainment", "#movies", "#music", "#fun", "#concert", "#live", "#streaming", "#series", "#tvshow", 
    "#festival", "#celebrity", "#fandom", "#popculture", "#videogames", "#animation", "#podcast", "#standup", 
    "#acting", "#bts", "#fanart", "#newrelease", "#album", "#comedy", "#cinema", "#performance",

    "#sports", "#football", "#soccer", "#cricket", "#basketball", "#tennis", "#hockey", "#olympics", 
    "#fitness", "#training", "#workout", "#swimming", "#racing", "#marathon", "#athletics", "#surfing", 
    "#climbing", "#adventure", "#boxing", "#golf", "#cycling", "#snowboarding", "#karate", "#badminton",

    "#art", "#painting", "#drawing", "#sketch", "#artist", "#creative", "#handmade", "#crafts", "#photography", 
    "#design", "#digitalart", "#artgallery", "#artsy", "#contemporaryart", "#sculpture", "#watercolor", 
    "#abstractart", "#illustration", "#portrait", "#collage", "#artwork", "#artoftheday", "#aesthetic", "#modernart",

    "#nature", "#wildlife", "#landscape", "#ecofriendly", "#environment", "#hiking", "#scenery", "#naturelovers", 
    "#camping", "#flowers", "#forest", "#green", "#outdoors", "#sunrise", "#planetearth", "#stargazing", 
    "#gardening", "#conservation", "#treehugger", "#naturalbeauty", "#oceanview", "#river", "#rain", "#earthday",

    "#photography", "#photooftheday", "#snapshot", "#beautiful", "#naturephotography", "#portraitphotography", 
    "#streetphotography", "#travelphotography", "#landscapephotography", "#aesthetic", "#blackandwhite", 
    "#weddingphotography", "#candid", "#hdr", "#photoshoot", "#dslr", "#filters", "#instapic", "#photoblog",

    "#gaming", "#gamer", "#game", "#esports", "#gamingcommunity", "#pcgaming", "#console", "#streaming", 
    "#videogames", "#retro", "#rpg", "#fps", "#arcade", "#gamerlife", "#twitch", "#multiplayer", "#onlinegaming",

    "#pets", "#dog", "#cat", "#petstagram", "#puppy", "#kitten", "#adoptdontshop", "#animallovers", "#cute", 
    "#petcare", "#doglover", "#catlover", "#petsofinstagram", "#petsdaily", "#exoticpets", "#wildlife", 
    "#petsarefamily", "#dogtraining", "#catlife", "#hamsters", "#bunnies", "#parrots", "#petlifestyle",

    "#humor", "#funny", "#meme", "#jokes", "#hilarious", "#lol", "#lmao", "#relatable", "#sarcasm", 
    "#comedy", "#funnypics", "#laughoutloud", "#humorous", "#standupcomedy", "#epic", "#rofl", "#comicstrip",

    "#lifestyle", "#daily", "#relax", "#mindfulness", "#home", "#living", "#familytime", "#hobbies", "#routine", 
    "#homedecor", "#minimalism", "#selflove", "#positivity", "#wellbeing", "#inspo", "#healthychoices", 
    "#simplify", "#spirituality", "#balance", "#timeforchange", "#mindset", "#zen", "#calm", "#lifetips",

    "#vlogs", "#dailyvlog", "#youtuber", "#videoblogger", "#vloggerslife", "#vlogcommunity", "#cinematography", 
    "#lifeonfilm", "#rawfootage", "#dailydiary", "#contentcreator", "#visualstorytelling", "#travelvlog", 
    "#lifestylevlog", "#adventurevlog", "#documentary", "#shortfilm", "#realtime", "#editing"
]

age_groups = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"]
regions = [
    "USA", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru", 
    "United Kingdom", "Germany", "France", "Italy", "Spain", "Netherlands", "Sweden", 
    "Norway", "Switzerland", "Poland", "India", "China", "Japan", "South Korea", 
    "Indonesia", "Vietnam", "Thailand", "Philippines", "Malaysia", "Pakistan", 
    "South Africa", "Nigeria", "Kenya", "Egypt", "Morocco", "Ghana", "Ethiopia", 
    "Uganda", "Tanzania", "Algeria", "Australia", "New Zealand", "Fiji", "Papua New Guinea", 
    "Samoa", "Saudi Arabia", "United Arab Emirates", "Iran", "Israel", "Turkey", 
    "Qatar", "Jordan", "Lebanon", "Iraq", "Kuwait", "Guatemala", "Costa Rica", 
    "Panama", "Honduras", "El Salvador", "Jamaica", "Cuba", "Bahamas", "Barbados", 
    "Dominican Republic", "Bangladesh", "Sri Lanka", "Nepal", "Bhutan", "Maldives", 
    "Taiwan", "Hong Kong", "Mongolia", "Macau", "Singapore", "Myanmar", "Cambodia", 
    "Laos", "Brunei", "Tunisia", "Sudan", "Libya", "Mauritania", "Western Sahara", 
    "Zimbabwe", "Botswana", "Zambia", "Malawi", "Namibia", "Belgium", "Austria", 
    "Portugal", "Ireland", "Luxembourg", "Russia", "Ukraine", "Czech Republic", 
    "Hungary", "Romania", "Denmark", "Iceland", "Finland", "Estonia", "Latvia", 
    "Greece", "Croatia", "Serbia", "Slovenia", "Montenegro", "Hawaii", "Tahiti", 
    "New Caledonia", "Guam", "Vanuatu"
]

device_types = ["mobile", "desktop", "tablet"]

def generate_mock_data(num_entries):
    data = []
    base_time = datetime.now()

    for i in range(1, num_entries + 1):
        post_type = random.choice(post_types)
        post_theme = random.choice(themes)
        hashtags = random.sample(hashtags_pool, k=random.randint(1, 4))
        timestamp = base_time - timedelta(days=random.randint(0, 365), seconds=random.randint(0, 86400))

        # Generate a realistic caption
        caption = fake.sentence(nb_words=random.randint(5, 15))

        # Calculate CTR as a percentage
        ctr = round(random.uniform(0.5, 15.0), 2)  # CTR between 0.5% to 15%

        post = {
            "post_id": i,
            "post_type": post_type,
            "post_theme": post_theme,
            "caption": caption,
            "timestamp": timestamp.isoformat(),
            "likes": random.randint(50, 5000),
            "shares": random.randint(5, 1000),
            "comments": random.randint(10, 1000),
            "time_spent_sec": random.randint(5, 300),  # Time spent on post in seconds
            "hashtags": hashtags,
            "ctr_percent": ctr,
            "age_group": random.choice(age_groups),
            "region": random.choice(regions),
            "device_type": random.choice(device_types),
        }

        data.append(post)

        # Optional: Print progress every 1000 entries
        if i % 1000 == 0:
            print(f"{i} entries generated...")

    return data

def save_to_json(data, filename="mock_social_media_data.json"):
    with open(filename, "w") as file:
        json.dump(data, file, indent=4)
    print(f"Data saved to {filename}")

def save_to_csv(data, filename="mock_social_media_data.csv"):
    if not data:
        return

    # Get the headers from the first entry
    headers = data[0].keys()

    with open(filename, "w", newline='', encoding='utf-8') as file:
        writer = csv.DictWriter(file, fieldnames=headers)
        writer.writeheader()
        for row in data:
            writer.writerow(row)
    print(f"Data saved to {filename}")

if __name__ == "__main__":
    print("Generating mock data...")
    mock_data = generate_mock_data(NUM_ENTRIES)
    print("Mock data generation completed.")

    # Save data to JSON
    save_to_json(mock_data, "mock_social_media_data.json")

    # Optional: Save data to CSV
    save_to_csv(mock_data, "mock_social_media_data.csv")
