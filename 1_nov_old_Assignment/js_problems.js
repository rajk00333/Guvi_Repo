var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
            name: "bar",
            activities: ["be grumpy", "eat bread omblet"],
            weight: 8,
            furcolor: "white"
        },
        {
            name: "foo",
            activities: ["sleep", "pre-sleep naps"],
            weight: 3
        }
    ]
}
console.log(cat);

/*
################### Basic Tasks to play with JSON ################### 
1. Add height and weight to Fluffy
*/
console.log(cat["name"])
console.log("Adding height = 55inches  and weight = 30 to Fluffy parameters")
cat["Height"] = "55 inches"
cat["Weights"] = "30"

console.log("Added height = 55inches  and weight = 30kg to Fluffy parameters")
console.log(cat);

/*
2. Fluffy name is spelled wrongly. Update it to Fluffyy
*/
console.log("Updating Fluffy name to Fluffyy");
cat["name"]="Fluffyy"
console.log(cat);
console.log("Updated Fluffy name to Fluffyy");
/*
3. List all the activities of Fluffyy’s catFriends.
*/
cat["catFriends"].forEach((catFrnd)=>{
    console.log(catFrnd.activities)
})
/*
4. Print the catFriends names.
*/
cat["catFriends"].forEach((catFrnd)=>{
    console.log(catFrnd.name)
})

/*
5. Print the total weight of catFriends
*/
const totalWeight = cat["catFriends"].reduce((currentTotal, catFrnd)=>{
    return catFrnd.weight + currentTotal
},0)
console.log("Total Weight of cat friends: ")
console.log(totalWeight)

/*
6. Print the total activities of all cats (op:6)
*/
totalActivities = cat["activities"].slice()
// totalActivities = Object.assign({}, cat["activities"]);

console.log(totalActivities)

cat["catFriends"].forEach((catFrnd)=>{

    catFrnd["activities"].forEach((act)=>{
        totalActivities.push(act)
    })
})
console.log("Total activities of all cats")
console.log(totalActivities)
/*
7. Add 2 more activities to bar & foo cats
*/


cat["catFriends"].forEach((catFrnd)=>{

    catFrnd["activities"].forEach((act)=>{
        // catFrnd["activities"].push("Dressing")
        catFrnd["activities"].push("Social Drinker")
    })
})

console.log(cat)
// /*
// 8. Update the fur color of bar
// */

cat["catFriends"][0].furcolor = "Gray"
console.log("Updating the fur color of bar")
console.log(cat)

