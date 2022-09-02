//DB imitation
import {DataBaseError, DefaultQuery} from "./types";

const db = {
    documents: [
        {
            "id": 0,
            "name": "Document 0",
            "body": "Document Body 0",
            "created_at": "2012-11-03",
            "finished_at": "2013-04-08"
        },
        {
            "id": 1,
            "name": "Document 1",
            "body": "Document Body 1",
            "created_at": "2012-04-27",
            "finished_at": "2013-03-15"
        },
        {
            "id": 2,
            "name": "Document 2",
            "body": "Document Body 2",
            "created_at": "2012-12-01",
            "finished_at": "2013-10-17"
        },
        {
            "id": 3,
            "name": "Document 3",
            "body": "Document Body 3",
            "created_at": "2012-05-28",
            "finished_at": "2013-08-08"
        },
        {
            "id": 4,
            "name": "Document 4",
            "body": "Document Body 4",
            "created_at": "2012-10-02",
            "finished_at": "2013-01-03"
        },
        {
            "id": 5,
            "name": "Document 5",
            "body": "Document Body 5",
            "created_at": "2012-10-06",
            "finished_at": "2013-03-29"
        },
        {
            "id": 6,
            "name": "Document 6",
            "body": "Document Body 6",
            "created_at": "2012-08-02",
            "finished_at": "2013-11-22"
        },
        {
            "id": 7,
            "name": "Document 7",
            "body": "Document Body 7",
            "created_at": "2012-04-24",
            "finished_at": "2013-02-26"
        },
        {
            "id": 8,
            "name": "Document 8",
            "body": "Document Body 8",
            "created_at": "2012-05-23",
            "finished_at": "2013-07-02"
        },
        {
            "id": 9,
            "name": "Document 9",
            "body": "Document Body 9",
            "created_at": "2012-04-07",
            "finished_at": "2013-12-02"
        },
        {
            "id": 10,
            "name": "Document 10",
            "body": "Document Body 10",
            "created_at": "2012-02-18",
            "finished_at": "2013-09-15"
        },
        {
            "id": 11,
            "name": "Document 11",
            "body": "Document Body 11",
            "created_at": "2012-06-12",
            "finished_at": "2013-07-18"
        },
        {
            "id": 12,
            "name": "Document 12",
            "body": "Document Body 12",
            "created_at": "2012-10-17",
            "finished_at": "2013-07-23"
        },
        {
            "id": 13,
            "name": "Document 13",
            "body": "Document Body 13",
            "created_at": "2012-02-16",
            "finished_at": "2013-11-23"
        },
        {
            "id": 14,
            "name": "Document 14",
            "body": "Document Body 14",
            "created_at": "2012-10-09",
            "finished_at": "2013-04-10"
        },
        {
            "id": 15,
            "name": "Document 15",
            "body": "Document Body 15",
            "created_at": "2012-11-19",
            "finished_at": "2013-08-10"
        },
        {
            "id": 16,
            "name": "Document 16",
            "body": "Document Body 16",
            "created_at": "2012-02-21",
            "finished_at": "2013-03-23"
        },
        {
            "id": 17,
            "name": "Document 17",
            "body": "Document Body 17",
            "created_at": "2012-12-25",
            "finished_at": "2013-05-08"
        },
        {
            "id": 18,
            "name": "Document 18",
            "body": "Document Body 18",
            "created_at": "2012-09-21",
            "finished_at": "2013-10-22"
        },
        {
            "id": 19,
            "name": "Document 19",
            "body": "Document Body 19",
            "created_at": "2012-08-04",
            "finished_at": "2013-10-17"
        },
        {
            "id": 20,
            "name": "Document 20",
            "body": "Document Body 20",
            "created_at": "2012-10-22",
            "finished_at": "2013-07-31"
        },
        {
            "id": 21,
            "name": "Document 21",
            "body": "Document Body 21",
            "created_at": "2012-01-21",
            "finished_at": "2013-02-10"
        },
        {
            "id": 22,
            "name": "Document 22",
            "body": "Document Body 22",
            "created_at": "2012-06-30",
            "finished_at": "2013-11-24"
        },
        {
            "id": 23,
            "name": "Document 23",
            "body": "Document Body 23",
            "created_at": "2012-01-05",
            "finished_at": "2013-08-06"
        },
        {
            "id": 24,
            "name": "Document 24",
            "body": "Document Body 24",
            "created_at": "2012-02-22",
            "finished_at": "2013-08-26"
        },
        {
            "id": 25,
            "name": "Document 25",
            "body": "Document Body 25",
            "created_at": "2012-12-04",
            "finished_at": "2013-08-02"
        },
        {
            "id": 26,
            "name": "Document 26",
            "body": "Document Body 26",
            "created_at": "2012-01-24",
            "finished_at": "2013-02-20"
        },
        {
            "id": 27,
            "name": "Document 27",
            "body": "Document Body 27",
            "created_at": "2012-09-22",
            "finished_at": "2013-05-15"
        },
        {
            "id": 28,
            "name": "Document 28",
            "body": "Document Body 28",
            "created_at": "2012-08-22",
            "finished_at": "2013-12-14"
        },
        {
            "id": 29,
            "name": "Document 29",
            "body": "Document Body 29",
            "created_at": "2012-07-26",
            "finished_at": "2013-12-22"
        },
        {
            "id": 30,
            "name": "Document 30",
            "body": "Document Body 30",
            "created_at": "2012-02-22",
            "finished_at": "2013-08-24"
        },
        {
            "id": 31,
            "name": "Document 31",
            "body": "Document Body 31",
            "created_at": "2012-12-01",
            "finished_at": "2013-08-15"
        },
        {
            "id": 32,
            "name": "Document 32",
            "body": "Document Body 32",
            "created_at": "2012-12-19",
            "finished_at": "2013-03-11"
        },
        {
            "id": 33,
            "name": "Document 33",
            "body": "Document Body 33",
            "created_at": "2012-12-05",
            "finished_at": "2013-02-04"
        },
        {
            "id": 34,
            "name": "Document 34",
            "body": "Document Body 34",
            "created_at": "2012-01-21",
            "finished_at": "2013-05-20"
        },
        {
            "id": 35,
            "name": "Document 35",
            "body": "Document Body 35",
            "created_at": "2012-08-23",
            "finished_at": "2013-09-09"
        },
        {
            "id": 36,
            "name": "Document 36",
            "body": "Document Body 36",
            "created_at": "2012-09-13",
            "finished_at": "2013-12-08"
        },
        {
            "id": 37,
            "name": "Document 37",
            "body": "Document Body 37",
            "created_at": "2012-02-01",
            "finished_at": "2013-02-03"
        },
        {
            "id": 38,
            "name": "Document 38",
            "body": "Document Body 38",
            "created_at": "2012-05-12",
            "finished_at": "2013-05-01"
        },
        {
            "id": 39,
            "name": "Document 39",
            "body": "Document Body 39",
            "created_at": "2012-01-16",
            "finished_at": "2013-03-15"
        },
        {
            "id": 40,
            "name": "Document 40",
            "body": "Document Body 40",
            "created_at": "2012-05-20",
            "finished_at": "2013-03-26"
        },
        {
            "id": 41,
            "name": "Document 41",
            "body": "Document Body 41",
            "created_at": "2012-10-10",
            "finished_at": "2013-01-11"
        },
        {
            "id": 42,
            "name": "Document 42",
            "body": "Document Body 42",
            "created_at": "2012-10-11",
            "finished_at": "2013-05-31"
        },
        {
            "id": 43,
            "name": "Document 43",
            "body": "Document Body 43",
            "created_at": "2012-12-20",
            "finished_at": "2013-12-20"
        },
        {
            "id": 44,
            "name": "Document 44",
            "body": "Document Body 44",
            "created_at": "2012-01-01",
            "finished_at": "2013-03-09"
        },
        {
            "id": 45,
            "name": "Document 45",
            "body": "Document Body 45",
            "created_at": "2012-12-21",
            "finished_at": "2013-08-18"
        },
        {
            "id": 46,
            "name": "Document 46",
            "body": "Document Body 46",
            "created_at": "2012-08-05",
            "finished_at": "2013-09-30"
        },
        {
            "id": 47,
            "name": "Document 47",
            "body": "Document Body 47",
            "created_at": "2012-10-07",
            "finished_at": "2013-09-01"
        },
        {
            "id": 48,
            "name": "Document 48",
            "body": "Document Body 48",
            "created_at": "2012-11-29",
            "finished_at": "2013-10-27"
        },
        {
            "id": 49,
            "name": "Document 49",
            "body": "Document Body 49",
            "created_at": "2012-09-06",
            "finished_at": "2013-12-11"
        }
    ],
}

const filter = (table: string, query: DefaultQuery) => {
    return db[table].filter((item) => {
        let match: boolean = false;

        if (query.id)
            return item.id === query.id;

        const nameMatch = !query.name || item.name.toLowerCase().match(query.name);
        const createdAtMatch = !query.created_at ||
            new Date(query.created_at) <= new Date(item.created_at);
        const finishedAtMatch = !query.finished_at ||
            new Date(query.finished_at) >= new Date(item.finished_at);

        if (nameMatch && createdAtMatch && finishedAtMatch) {
            match = true;
        }

        return match;
    });
}
const validate = (table: string, query: DefaultQuery) => {
    const errorName = 'DB Error';

    if (!db[table])
        return {
            error: true,
            message: `${errorName}: No Such Table!`,
        };

    if (!query)
        return {
            error: true,
            message: `${errorName}: Query Is Undefined!`,
        };

    return {
        error: false,
    };
}
const middleware = (table: string, query: DefaultQuery) => {
    const validationResult = validate(table, query);

    if (validationResult.error) {
        return validationResult;
    }

    return false;
};

export const find = async <Query>(table, query) => {
    const middlewareResult = await middleware(table, query);

    if (middlewareResult)
        return middlewareResult;

    let filtered;

    filtered = filter(table, query);

    if (query.page) {
        let index = query.page.value - 1;
        let start = index * query.page.size;
        let end = start + query.page.size;

        filtered = filtered.slice(start, end);
    }

    return filtered;
}

export const count = async <Query>(table, query): Promise<{ count: number } | DataBaseError> => {
    const middlewareResult = await middleware(table, query);

    if (middlewareResult)
        return middlewareResult as DataBaseError;

    return {
        count: filter(table, query).length
    };
}