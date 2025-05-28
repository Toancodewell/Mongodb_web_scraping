use largest_company;

# Which industry generates the highest average revenue?
db.company.aggregate([
  {
    $group: {
      _id: "$Industry",
      Avg_Revenue: { $avg: "$Revenue (USD millions)" },
      Total_count: { $sum: 1 }
    }},
  {
    $sort: {
      Avg_Revenue: -1
    }},
  {
    $limit: 5
  },
  {
    $project: {
      _id: 0,
      industry: "$_id",
      Avg_Revenue: 1,
      Total_count: 1
    }}
]);


#Which industry has the highest revenue growth rate?
db.company.aggregate([
  {
    $addFields: {
      revenueGrowthNumber: {
        $toDouble: {
          $substrBytes: [
            "$Revenue growth",
            0,
            { $subtract: [ { $strLenBytes: "$Revenue growth" }, 1 ] }
          ]
        }}}},
  {
    $group: {
      _id: "$Industry",
      Avg_Revenue: { $avg: "$Revenue (USD millions)" },
      Avg_RevenueGrowth: { $avg: "$revenueGrowthNumber" },
      Total_count: { $sum: 1 }
    }},
  {
    $match: {
      Avg_RevenueGrowth: { $gt: 0 }
    }},
  {
    $sort: {
      Avg_RevenueGrowth: -1
    }
  },
  {
    $limit: 1
  },
  {
    $project: {
      _id: 0,
      industry: "$_id",
      Avg_Revenue: 1,
      Avg_RevenueGrowth: 1,
      Total_count: 1
    }}
]);


# Which industry has the highest average number of employees?
db.company.aggregate([
  {
    $group: {
      _id: "$Industry",
      Avg_employees: { $avg: "$Employees" }
    }
  },
  {
    $sort: {
     Avg_employees: -1
    }
  },
  {
    $limit: 5
  },
  {
    $project: {
      _id: 0,
      industry: "$_id",
      Avg_employees: 1
    }
  }
]);

