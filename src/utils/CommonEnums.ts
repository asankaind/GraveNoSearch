enum LeaveAbsenceStatusType {
    accepted = 0,
    rejected = 1,
    revoked = 2,
    inspected = 3,
    notProcessed = 4
}

enum ExpenseStateType {
    started = 0,
    confirmedByEmployee = 1,
    confirmedByChiefOrAdmin = 2,
    rejectedByChiefOrAdmin = 3,
    readyForTransfer = 4,
    transferred = 5,
    opened = 6,
    inspected = 7
}

enum LeaveAbsenceGridFields {
    IsSeries,
    Stat1,
    Stat2,
    PersonName,
    EmployeeNr,
    Position,
    CauseName,
    Percentage,
    StartDate,
    Alert,
    Insurance,
    Attested,
    Deleted,
    Reported,
    EndDate,
    Comment,
    Status,
    StatusDetail
}

enum DriverLogGridFields {
    id,
    StartDate,
    EndDate,
    TotalDistance,
    Status,
    Position,
    PersonName,
    StatusInfo
    //,    Selected
}

enum DriverLogDetailGridFields {
    id,
    date,
    from,
    to,
    totalDistance,
    actions,
    assignment,
    companyOrContactPerson,
    accountKSKBProj,
    comment
}

enum OutLayGridFields {
    id,
    Date,
    Vat,
    Status,
    Sum,
    Position,
    Name,
    StatusInfo,
    PersonName
    //,    Selected
}
enum OutLayDetailGridFields {
    id,
    actions,
    Date,
    Vat,
    Comment,
    Sum,
    Description,
    Kontering,
    AccountKSKBProj,
    Name
}


enum TravelExpenseGridFields {
    id,
    actions,
    Departure,
    Position,
    Comment,
    Arrival,
    HomeDeep,
    HomeArv,
    Status,
    StatusInfo,
    Name,
    Subsistence
}

enum RecurringOption {
    single,
    series
}

enum RecurringPattern {
    Weekly,
    Monthly
}

enum RecurringRange {
    EndAfter,
    EndBy
}

enum RouteModules {
    search,
    contextview
}

enum WorkActivityType {
    informational = 0,
    positive = 1,
    negative = -1,
}

enum AppOwner { //LabOra_NO, LabOra_SE, FAS
    AGRANDO_NO, 
    AGRANDO_SE, 
    LJ 
}
enum CollectiveAgreementType { 
    SwedishChurch,
    NorwegianPriest, 
    NorwegianKA 
}

enum AssignResponseType {
    hasOverlappingSchedule = 0, 
    hasOverlappingNormal = 1, 
    scheduleFollows = 2, 
    normalFollows = 3, 
    hasOpenSchedule = 4, 
    hasOpenNormal = 5, 
    usesTimeStamping = 6, 
}

enum TreeNodeType {
    companyNode = 0,
    departmentNode = 1
}

enum UserStatusType {
    all = 0,
    activated = 1,
    deactivated =3
}

export {
    LeaveAbsenceStatusType,
    LeaveAbsenceGridFields,
    RecurringOption,
    RecurringPattern,
    RecurringRange,
    RouteModules,
    DriverLogGridFields,
    ExpenseStateType,
    DriverLogDetailGridFields,
    WorkActivityType,
    OutLayGridFields,
    OutLayDetailGridFields,
    TravelExpenseGridFields ,
    AppOwner,
    CollectiveAgreementType,
    AssignResponseType,
    TreeNodeType,
    UserStatusType
};
