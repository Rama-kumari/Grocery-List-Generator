// DOM Elements
const landingPage = document.getElementById('landing-page');
const chatPage = document.getElementById('chat-page');
const startButton = document.getElementById('start-button');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const sendButton = document.getElementById('send-button');

// State
let isLoading = false;

// Food Database
const foodDatabase = {
    sandwiches: {
        classicClub: {
            ingredients: [
                "3 slices of bread (toasted)",
                "Lettuce leaves",
                "Sliced tomatoes",
                "Sliced cucumber",
                "Sliced red onion",
                "Bacon strips (cooked)",
                "Sliced turkey breast",
                "Mayonnaise",
                "Salt and pepper"
            ],
            description: "A triple-decker sandwich with layers of meat, vegetables, and bacon."
        },
        grilledCheese: {
            ingredients: [
                "2 slices of bread",
                "Cheddar cheese",
                "Butter",
                "Optional: sliced tomatoes",
                "Optional: caramelized onions"
            ],
            description: "A classic comfort food with melted cheese between buttered bread."
        },
        veggieWrap: {
            ingredients: [
                "Tortilla wrap",
                "Hummus",
                "Mixed salad greens",
                "Sliced bell peppers",
                "Sliced carrots",
                "Sliced cucumber",
                "Avocado",
                "Sprouts"
            ],
            description: "A healthy vegetarian wrap packed with fresh vegetables."
        }
    },
    fruits: {
        common: {
            ingredients: [
                "Apples",
                "Bananas",
                "Oranges",
                "Grapes",
                "Strawberries",
                "Blueberries",
                "Pears",
                "Peaches"
            ],
            description: "Common fruits found in most grocery stores."
        },
        exotic: {
            ingredients: [
                "Dragon fruit",
                "Mangosteen",
                "Rambutan",
                "Lychee",
                "Durian",
                "Jackfruit",
                "Star fruit",
                "Buddha's hand"
            ],
            description: "Exotic fruits from tropical regions."
        },
        seasonal: {
            ingredients: [
                "Watermelon (summer)",
                "Pomegranate (fall)",
                "Clementines (winter)",
                "Mangoes (spring)",
                "Cherries (summer)",
                "Persimmons (fall)",
                "Kumquats (winter)",
                "Apricots (spring)"
            ],
            description: "Seasonal fruits available during specific times of the year."
        }
    },
    pizza: {
        margherita: {
            ingredients: [
                "Pizza dough",
                "Tomato sauce",
                "Fresh mozzarella",
                "Fresh basil leaves",
                "Extra virgin olive oil",
                "Salt"
            ],
            description: "Classic Italian pizza with simple, fresh ingredients."
        },
        pepperoni: {
            ingredients: [
                "Pizza dough",
                "Tomato sauce",
                "Mozzarella cheese",
                "Pepperoni slices",
                "Italian seasoning",
                "Red pepper flakes (optional)"
            ],
            description: "Popular American-style pizza with spicy pepperoni."
        },
        veggieSupreme: {
            ingredients: [
                "Pizza dough",
                "Tomato sauce",
                "Mozzarella cheese",
                "Bell peppers",
                "Onions",
                "Mushrooms",
                "Black olives",
                "Fresh tomatoes"
            ],
            description: "Vegetable-packed pizza with various toppings."
        }
    },
    salad: {
        caesar: {
            ingredients: [
                "Romaine lettuce",
                "Croutons",
                "Parmesan cheese",
                "Caesar dressing",
                "Black pepper",
                "Optional: grilled chicken"
            ],
            description: "Classic Caesar salad with crisp lettuce and tangy dressing."
        },
        mediterranean: {
            ingredients: [
                "Mixed greens",
                "Cucumber",
                "Tomatoes",
                "Red onion",
                "Kalamata olives",
                "Feta cheese",
                "Extra virgin olive oil",
                "Fresh herbs"
            ],
            description: "Fresh Mediterranean-style salad with Greek influences."
        },
        quinoa: {
            ingredients: [
                "Cooked quinoa",
                "Mixed vegetables",
                "Chickpeas",
                "Avocado",
                "Lemon dressing",
                "Fresh herbs",
                "Nuts or seeds",
                "Optional: feta cheese"
            ],
            description: "Protein-rich quinoa salad with fresh vegetables."
        }
    },
    pasta: {
        spaghettiCarbonara: {
            ingredients: [
                "Spaghetti",
                "Eggs",
                "Pecorino Romano",
                "Guanciale or pancetta",
                "Black pepper",
                "Salt",
                "Pasta water"
            ],
            description: "Classic Italian pasta dish with eggs and cured pork."
        },
        fettuccineAlfredo: {
            ingredients: [
                "Fettuccine pasta",
                "Heavy cream",
                "Butter",
                "Parmesan cheese",
                "Garlic",
                "Salt",
                "Black pepper",
                "Fresh parsley"
            ],
            description: "Creamy pasta dish with rich Alfredo sauce."
        },
        pestoPasta: {
            ingredients: [
                "Pasta of choice",
                "Fresh basil",
                "Pine nuts",
                "Garlic",
                "Parmesan cheese",
                "Extra virgin olive oil",
                "Salt",
                "Black pepper"
            ],
            description: "Fresh and aromatic pasta with homemade pesto sauce."
        }
    },
    desserts: {
        chocolateCake: {
            ingredients: [
                "All-purpose flour",
                "Cocoa powder",
                "Sugar",
                "Eggs",
                "Butter",
                "Milk",
                "Vanilla extract",
                "Baking powder and soda"
            ],
            description: "Classic chocolate cake with rich frosting."
        },
        applePie: {
            ingredients: [
                "Pie crust",
                "Apples",
                "Sugar",
                "Cinnamon",
                "Butter",
                "Lemon juice",
                "Cornstarch",
                "Egg wash"
            ],
            description: "Traditional apple pie with cinnamon-spiced filling."
        },
        iceCream: {
            ingredients: [
                "Heavy cream",
                "Whole milk",
                "Sugar",
                "Egg yolks",
                "Vanilla extract",
                "Salt",
                "Optional flavorings"
            ],
            description: "Creamy homemade ice cream base."
        }
    },
    beverages: {
        smoothies: {
            ingredients: [
                "Mixed fruits",
                "Yogurt or milk",
                "Honey or maple syrup",
                "Ice",
                "Optional: protein powder",
                "Optional: spinach",
                "Optional: chia seeds"
            ],
            description: "Healthy and refreshing fruit smoothies."
        },
        coffee: {
            ingredients: [
                "Coffee beans",
                "Water",
                "Optional: milk",
                "Optional: sugar",
                "Optional: flavored syrups",
                "Optional: whipped cream"
            ],
            description: "Various coffee drink options."
        },
        cocktails: {
            ingredients: [
                "Spirits (vodka, gin, rum, etc.)",
                "Mixers",
                "Fresh fruits",
                "Herbs",
                "Ice",
                "Optional: bitters",
                "Optional: syrups"
            ],
            description: "Classic and modern cocktail recipes."
        }
    }
};

// Grocery Lists
const groceryLists = {
    weekly: {
        fresh: [
            "Milk (2 gallons)",
            "Bread (2 loaves)",
            "Eggs (1 dozen)",
            "Butter (1 pound)",
            "Cheese (1 pound)",
            "Yogurt (2 containers)",
            "Fresh fruits (assorted)",
            "Fresh vegetables (assorted)",
            "Meat (chicken, beef, or fish)",
            "Salad greens"
        ],
        pantry: [
            "Rice (2 pounds)",
            "Pasta (2 pounds)",
            "Canned tomatoes (2 cans)",
            "Canned beans (2 cans)",
            "Cereal (2 boxes)",
            "Snacks (chips, nuts)",
            "Coffee/Tea",
            "Sugar",
            "Flour",
            "Cooking oil"
        ],
        household: [
            "Paper towels",
            "Toilet paper",
            "Dish soap",
            "Laundry detergent",
            "Hand soap"
        ]
    },
    monthly: {
        fresh: [
            "Milk (8 gallons)",
            "Bread (8 loaves)",
            "Eggs (4 dozen)",
            "Butter (4 pounds)",
            "Cheese (4 pounds)",
            "Yogurt (8 containers)",
            "Fresh fruits (bulk)",
            "Fresh vegetables (bulk)",
            "Meat (chicken, beef, or fish)",
            "Salad greens"
        ],
        pantry: [
            "Rice (8 pounds)",
            "Pasta (8 pounds)",
            "Canned tomatoes (8 cans)",
            "Canned beans (8 cans)",
            "Cereal (8 boxes)",
            "Snacks (bulk)",
            "Coffee/Tea",
            "Sugar (bulk)",
            "Flour (bulk)",
            "Cooking oil (bulk)",
            "Spices and seasonings",
            "Baking supplies"
        ],
        household: [
            "Paper towels (bulk)",
            "Toilet paper (bulk)",
            "Dish soap (bulk)",
            "Laundry detergent (bulk)",
            "Hand soap (bulk)",
            "Cleaning supplies",
            "Personal care items"
        ]
    }
};

// Event Listeners
startButton.addEventListener('click', () => {
    landingPage.classList.add('hidden');
    chatPage.classList.remove('hidden');
});

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const message = chatInput.value.trim().toLowerCase();
    if (!message) return;

    // Add user message to chat
    addMessage(message, 'user');
    chatInput.value = '';
    isLoading = true;
    sendButton.disabled = true;

    try {
        const response = await generateResponse(message);
        addMessage(response, 'bot');
    } catch (error) {
        addMessage('Sorry, I encountered an error. Please try again.', 'bot');
    } finally {
        isLoading = false;
        sendButton.disabled = false;
    }
});

// Helper Functions
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const icon = document.createElement('div');
    icon.className = 'message-icon';
    icon.textContent = sender === 'user' ? '👤' : '🤖';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    const senderDiv = document.createElement('div');
    senderDiv.className = 'message-sender';
    senderDiv.textContent = sender === 'user' ? 'You' : 'GroceryBot';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerHTML = text.replace(/\n/g, '<br>'); // Convert newlines to HTML line breaks
    
    content.appendChild(senderDiv);
    content.appendChild(textDiv);
    messageDiv.appendChild(icon);
    messageDiv.appendChild(content);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function formatList(items) {
    return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

function formatGroceryList(list) {
    return `Fresh Items:\n${formatList(list.fresh)}\n\nPantry Items:\n${formatList(list.pantry)}\n\nHousehold Items:\n${formatList(list.household)}`;
}

async function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for grocery list requests
    const weeklyKeywords = ['weekly', 'week', 'this week', 'shopping list', 'grocery list', 'what to buy'];
    const monthlyKeywords = ['monthly', 'month', 'this month', 'shopping list', 'grocery list', 'what to buy'];
    
    if (weeklyKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return formatGroceryList(groceryLists.weekly);
    }
    
    if (monthlyKeywords.some(keyword => lowerMessage.includes(keyword))) {
        return formatGroceryList(groceryLists.monthly);
    }

    // Check for food queries
    for (const [category, items] of Object.entries(foodDatabase)) {
        if (lowerMessage.includes(category)) {
            let response = `Here are the ingredients for various ${category}:\n\n`;
            
            for (const [item, details] of Object.entries(items)) {
                response += `${item.charAt(0).toUpperCase() + item.slice(1)}:\n`;
                response += formatList(details.ingredients);
                response += `\n${details.description}\n\n`;
            }
            
            return response;
        }
        
        // Check individual items within categories
        for (const [item, details] of Object.entries(items)) {
            if (lowerMessage.includes(item)) {
                return `Here are the ingredients for ${item}:\n\n${formatList(details.ingredients)}\n\n${details.description}`;
            }
        }
    }

    // Default response for unknown queries
    return "I can help you with:\n\n" +
           "1. Weekly grocery list\n" +
           "2. Monthly grocery list\n" +
           "3. Ingredients for various foods including:\n" +
           "   - Sandwiches\n" +
           "   - Fruits\n" +
           "   - Pizza\n" +
           "   - Salad\n" +
           "   - Pasta\n" +
           "   - Desserts\n" +
           "   - Beverages\n\n" +
           "Just ask about any of these items!";
}

// Initialize
chatInput.focus(); 