use largest_company;

#convert all values of Rank field to int type

db.company.updateMany(
{ Rank: { $type: "string" } },
[
{
$set: {
Rank: { $toInt: "$Rank" }
}
}
]
);

# Revenue (USD millions) and Employees on float type
db.company.updateMany(
  {},
  [
    {
      $set: {
        "Revenue (USD millions)": {
          $toDouble: {
            $replaceAll: {
              input: "$Revenue (USD millions)",
              find: ",",
              replacement: ""
            }
          }
        },
        "Employees": {
          $toDouble: {
            $replaceAll: {
              input: "$Employees",
              find: ",",
              replacement: ""
            }
          }
        }
      }
    }
  ]
);
