## 1. Full Name

Pavel Halanin

<img src="https://media.licdn.com/dms/image/v2/D4D03AQENvTOEk0nyLA/profile-displayphoto-scale_400_400/B4DZygQCpIJ4Ak-/0/1772215088258?e=1775088000&v=beta&t=F-_aX9ylgQhtjFx62xJoMBeWF5pSWXJTuOIC39PyIAs" style="max-height: 100px;" />

## 2. Contact information

- **Phone**: [+375-33-331-32-03](tel:+375333313203)
- **E-mail**: [pavelhalanin@outlook.com](mailto:pavelhalanin@outlook.com)
- **Discord**: pavgal
- **GitHub**: [pavelhalanin](https://github.com/pavelhalanin)
- **LinkedIn**: [pavelhalanin](https://www.linkedin.com/in/pavelhalanin/)
- **WebSite**:
    - [OOO DE-PA](https://www.de-pa.by/)
    - [Kung Consulting](https://www.kungconsulting.com/)

## 3. Brief Self-Introduction

Software Engineer with 3 years of commercial experience, graduated with honors in Software Engineering. Began my career at DE-PA, then joined ATLANT, where I was promoted to Software Engineer 2nd Category within two years. Tech stack: JavaScript, React, React Native, Next.js, Node.js, NestJS, PHP, REST API, Docker, Git. Seeking a Middle Software Engineer position in a professional team with opportunities for further growth.

## 4. Skills

- programming languages: JavaScript, PHP8, SQL, TypeScript
- frameworks: React, ReactNative, NextJS, NestJS
- methodologies: ARIS, UML
- version control systems: Git, SVN
- IDE: VS Code
- Package Managers: npm, yarn
- Debugging Tools: Chrome DevTools
- Operating Systems: Windows, Linux
- API Testing: Postman, SwaggerUI
- Markup & Documentation Languages: HTML5, CSS3, MarkDown, LaTeX, JSON
- Databases: MySQL, Oracle, SQLite, DBF
- Containers & Virtualization: Docker, docker-compose
- Design: Figma, Photopea, Adobe Photoshop
- Hosting & Server Management: cPanel, ISPmanager, Hoster.by, Login.by
- AI & Local Models: Ollama
- DevOps & Infrastructure: Apache, WAMP, nginx

## 5. Code Examples

```js
class Helper {
    static async fetchCompanyData_byUnp(unp) {
        const URL_ = `https://grp.nalog.gov.by/api/grp-public/data?unp=${unp}`;
        const RESPONSE = await fetch(URL_);

        const HTTP_STATUS = RESPONSE.status;
        if (HTTP_STATUS !== 200) {
            const TEXT = await RESPONSE.text();
            throw new Error(`HttpStatus ${HTTP_STATUS}\n${TEXT}`);
        }

        const DATA = await RESPONSE.json();
        return DATA;
    }
}

try {
    const DATA = Helper.fetchCompanyData_byUnp(100582333);
    console.log(DATA);
}
catch(exception) {
    console.error(exception);
}
```

```php
try {
    $HOME = strlen($_SERVER['DOCUMENT_ROOT']) != 0 ? $_SERVER['DOCUMENT_ROOT'] : "";

    class VisitCount {
        static function getData() {
            global $HOME;

            $pdo = new PDO("sqlite:$HOME/../_visit_count_database.sqlite");
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $sql = "SELECT
                        *
                    FROM
                        VisitCount
                    WHERE
                        uri = :uri
                    ";

            $sth = $pdo->prepare($sql);
            $sth->execute([
                'uri' => $uri,
            ]);
            $result = $sth->fetch(PDO::FETCH_ASSOC);

            $isFound = $result != null;
            $datetime = date('Y-m-d H:i:s');

            if ($isFound) {
                $count = $result['count'] + 1;

                $sql = "UPDATE
                            VisitCount
                        SET
                            count = :count,
                            updated_at = :datetime
                        WHERE
                            uri = :uri
                        ";

                $sth = $pdo->prepare($sql);
                $sth->execute([
                    'uri' => $uri,
                    'count' => $count,
                    'datetime' => $datetime,
                ]);
            }

            if (!$isFound) {
                $sql = "INSERT INTO
                            VisitCount
                            (uri, count, created_at, updated_at)
                        VALUES
                            (:uri, :count, :datetime, :datetime)
                        ";

                $sth = $pdo->prepare($sql);
                $sth->execute([
                    'uri' => $uri,
                    'count' => $count,
                    'datetime' => $datetime,
                ]);
            }
        }
    }

}
catch(Throwable $exception) {
    echo "<pre>";
    print_r($exception);
}
```

## 6. Work Experience (2 year 10 month) (updated at 16 March, 2026)

- ZAO ATLANT
    - December 2025 - present (4 month)
    - 2nd category software engineer

- ZAO ATLANT
    - June 2024 - December 2025 (1 year 7 month)
    - software engineer

- OOO DE-PA
    - June 2023 - June 2024 (1 year 1 month)
    - software engineer

## 7. Education

- Brest State Technical University
    - September 2019 - 2023 (4 years)
    - Diploma of Higher Education with Honors
    - Qualification: "software engineer"
    - Specialty: "Information Technology Software"

## 8. Languages

- English - I read, I speak fluently
- Russian - native Landuage
- Belarusian - native Landuage
