use largest_company;
#Which companies are ranked highest?
db.company.aggregate([
    {
        $match: { "Rank": 1 }
    },
    {
        $project: {
            _id: 0,
            Name: 1
        }
    }
]);
# Find companies with negative revenue growth
db.company.aggregate([
  {
    $addFields: {
      revenueGrowthNumber: {
        $toDouble: {
          $substrBytes: ["$Revenue growth", 0, { $subtract: [ { $strLenBytes: "$Revenue growth" }, 1 ] }]
        }}}},
  {
    $match: {
      revenueGrowthNumber: { $lt: 0 }
    }
  },
  {
    $project: {
      _id: 0,
      Name: 1,
      Rank:1,
      Revenue_growth: "$Revenue growth",
      revenueGrowthNumber: 1
    }}
]);


# What industries are they in?
db.company.aggregate([
  {
    $group: {
      _id: "$Industry",   
      total_count: { $sum: 1 }     
    }
  },
  {
    $sort: {
      total_count: -1              
    }
  },
  {
    $project: {
      _id: 0,
      industry: "$_id",     
      total_count: 1
    }
  }
]);

## Which companies have the highest revenue growth?

db.company.aggregate([
  {
    $addFields: {
      revenueGrowthNumber: {
        $toDouble: {
          $substrBytes: [
            "$Revenue growth",
            0,
            { $subtract: [ { $strLenBytes: "$Revenue growth" }, 1 ] }
          ]}}}},
  {
    $match: {
      revenueGrowthNumber: { $gt: 0 }
    }
  },
  {
    $sort: {
      revenueGrowthNumber: -1
    }
  },
  { $limit: 1 },
  {
    $project: {
      _id: 0,
      Name: 1,
      Rank: 1,
      Revenue_growth: "$Revenue growth",
      revenueGrowthNumber: 1
    }}
]);



