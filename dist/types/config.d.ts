import { z } from "zod";
export declare const VersionPolicySchema: z.ZodObject<{
    min: z.ZodOptional<z.ZodString>;
    max: z.ZodOptional<z.ZodString>;
    exact: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    min?: string | undefined;
    max?: string | undefined;
    exact?: string | undefined;
}, {
    min?: string | undefined;
    max?: string | undefined;
    exact?: string | undefined;
}>;
export declare const LanguagesConfigSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
export declare const RepoCommandsSchema: z.ZodObject<{
    test: z.ZodOptional<z.ZodString>;
    lint: z.ZodOptional<z.ZodString>;
    start: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    test?: string | undefined;
    lint?: string | undefined;
    start?: string | undefined;
}, {
    test?: string | undefined;
    lint?: string | undefined;
    start?: string | undefined;
}>;
export declare const WatchConfigSchema: z.ZodObject<{
    patterns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    ignore: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    customCommand: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    patterns?: string[] | undefined;
    ignore?: string[] | undefined;
    customCommand?: string | undefined;
}, {
    patterns?: string[] | undefined;
    ignore?: string[] | undefined;
    customCommand?: string | undefined;
}>;
export declare const PackageSchema: z.ZodUnion<[z.ZodString, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    gitUrl: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
    repository: z.ZodOptional<z.ZodObject<{
        provider: z.ZodString;
        owner: z.ZodString;
        name: z.ZodString;
        branch: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        provider: string;
        owner: string;
        branch?: string | undefined;
    }, {
        name: string;
        provider: string;
        owner: string;
        branch?: string | undefined;
    }>>;
    defaultBranch: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    languages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    packageManager: z.ZodOptional<z.ZodString>;
    library: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    commands: z.ZodOptional<z.ZodObject<{
        test: z.ZodOptional<z.ZodString>;
        lint: z.ZodOptional<z.ZodString>;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    }, {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    }>>;
    startInDocker: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    dockerImage: z.ZodOptional<z.ZodString>;
    watch: z.ZodOptional<z.ZodObject<{
        patterns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        ignore: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        customCommand: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    }, {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    }>>;
    requiredPlugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    library: boolean;
    startInDocker: boolean;
    path?: string | undefined;
    id?: string | undefined;
    location?: string | undefined;
    version?: string | undefined;
    name?: string | undefined;
    gitUrl?: string | undefined;
    repository?: {
        name: string;
        provider: string;
        owner: string;
        branch?: string | undefined;
    } | undefined;
    defaultBranch?: string | undefined;
    tags?: string[] | undefined;
    languages?: string[] | undefined;
    packageManager?: string | undefined;
    commands?: {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    } | undefined;
    dockerImage?: string | undefined;
    watch?: {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    } | undefined;
    requiredPlugins?: string[] | undefined;
}, {
    path?: string | undefined;
    id?: string | undefined;
    location?: string | undefined;
    version?: string | undefined;
    name?: string | undefined;
    gitUrl?: string | undefined;
    repository?: {
        name: string;
        provider: string;
        owner: string;
        branch?: string | undefined;
    } | undefined;
    defaultBranch?: string | undefined;
    tags?: string[] | undefined;
    languages?: string[] | undefined;
    packageManager?: string | undefined;
    library?: boolean | undefined;
    commands?: {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    } | undefined;
    startInDocker?: boolean | undefined;
    dockerImage?: string | undefined;
    watch?: {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    } | undefined;
    requiredPlugins?: string[] | undefined;
}>]>;
export declare const PackageManagerConfigSchema: z.ZodOptional<z.ZodString>;
export declare const GitHubConfigSchema: z.ZodObject<{
    provider: z.ZodDefault<z.ZodLiteral<"github">>;
    useGhCli: z.ZodDefault<z.ZodBoolean>;
    owner: z.ZodOptional<z.ZodString>;
    repoVisibility: z.ZodOptional<z.ZodEnum<["public", "private", "internal"]>>;
    defaultBaseBranch: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    provider: "github";
    useGhCli: boolean;
    defaultBaseBranch: string;
    owner?: string | undefined;
    repoVisibility?: "public" | "private" | "internal" | undefined;
}, {
    provider?: "github" | undefined;
    owner?: string | undefined;
    useGhCli?: boolean | undefined;
    repoVisibility?: "public" | "private" | "internal" | undefined;
    defaultBaseBranch?: string | undefined;
}>;
export declare const EditorConfigSchema: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
export declare const PluginDependencySchema: z.ZodObject<{
    version: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodEnum<["npm", "git", "local", "remote"]>>;
    url: z.ZodOptional<z.ZodString>;
    path: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path?: string | undefined;
    url?: string | undefined;
    version?: string | undefined;
    source?: "npm" | "git" | "local" | "remote" | undefined;
}, {
    path?: string | undefined;
    url?: string | undefined;
    version?: string | undefined;
    source?: "npm" | "git" | "local" | "remote" | undefined;
}>;
export declare const ProjectConfigSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    library: z.ZodOptional<z.ZodBoolean>;
    commands: z.ZodOptional<z.ZodObject<{
        test: z.ZodOptional<z.ZodString>;
        lint: z.ZodOptional<z.ZodString>;
        start: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    }, {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    }>>;
    watch: z.ZodOptional<z.ZodObject<{
        patterns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        ignore: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        customCommand: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    }, {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    }>>;
    startInDocker: z.ZodOptional<z.ZodBoolean>;
    dockerImage: z.ZodOptional<z.ZodString>;
    requiredPlugins: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<["npm", "git", "local", "remote"]>>;
        url: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    library?: boolean | undefined;
    commands?: {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    } | undefined;
    startInDocker?: boolean | undefined;
    dockerImage?: string | undefined;
    watch?: {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    } | undefined;
    requiredPlugins?: Record<string, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }> | undefined;
}, {
    name?: string | undefined;
    library?: boolean | undefined;
    commands?: {
        test?: string | undefined;
        lint?: string | undefined;
        start?: string | undefined;
    } | undefined;
    startInDocker?: boolean | undefined;
    dockerImage?: string | undefined;
    watch?: {
        patterns?: string[] | undefined;
        ignore?: string[] | undefined;
        customCommand?: string | undefined;
    } | undefined;
    requiredPlugins?: Record<string, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }> | undefined;
}>;
export declare const PluginConfigSchema: z.ZodObject<{
    enabled: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    dependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        version: z.ZodOptional<z.ZodString>;
        source: z.ZodOptional<z.ZodEnum<["npm", "git", "local", "remote"]>>;
        url: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    enabled?: string[] | undefined;
    config?: Record<string, any> | undefined;
    dependencies?: Record<string, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }> | undefined;
}, {
    enabled?: string[] | undefined;
    config?: Record<string, any> | undefined;
    dependencies?: Record<string, {
        path?: string | undefined;
        url?: string | undefined;
        version?: string | undefined;
        source?: "npm" | "git" | "local" | "remote" | undefined;
    }> | undefined;
}>;
export declare const BaselineConfigSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    private: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    packages: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        gitUrl: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodObject<{
            provider: z.ZodString;
            owner: z.ZodString;
            name: z.ZodString;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        }, {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        }>>;
        defaultBranch: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        languages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        packageManager: z.ZodOptional<z.ZodString>;
        library: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        commands: z.ZodOptional<z.ZodObject<{
            test: z.ZodOptional<z.ZodString>;
            lint: z.ZodOptional<z.ZodString>;
            start: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        }, {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        }>>;
        startInDocker: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        dockerImage: z.ZodOptional<z.ZodString>;
        watch: z.ZodOptional<z.ZodObject<{
            patterns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            ignore: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            customCommand: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        }, {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        }>>;
        requiredPlugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        library: boolean;
        startInDocker: boolean;
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    }, {
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        library?: boolean | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        startInDocker?: boolean | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    }>]>, "many">;
    repos: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        gitUrl: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodString>;
        repository: z.ZodOptional<z.ZodObject<{
            provider: z.ZodString;
            owner: z.ZodString;
            name: z.ZodString;
            branch: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        }, {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        }>>;
        defaultBranch: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        languages: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        packageManager: z.ZodOptional<z.ZodString>;
        library: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        commands: z.ZodOptional<z.ZodObject<{
            test: z.ZodOptional<z.ZodString>;
            lint: z.ZodOptional<z.ZodString>;
            start: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        }, {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        }>>;
        startInDocker: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        dockerImage: z.ZodOptional<z.ZodString>;
        watch: z.ZodOptional<z.ZodObject<{
            patterns: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            ignore: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            customCommand: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        }, {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        }>>;
        requiredPlugins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        library: boolean;
        startInDocker: boolean;
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    }, {
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        library?: boolean | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        startInDocker?: boolean | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    }>]>, "many">>;
    languages: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    packageManager: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodObject<{
        provider: z.ZodDefault<z.ZodLiteral<"github">>;
        useGhCli: z.ZodDefault<z.ZodBoolean>;
        owner: z.ZodOptional<z.ZodString>;
        repoVisibility: z.ZodOptional<z.ZodEnum<["public", "private", "internal"]>>;
        defaultBaseBranch: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        provider: "github";
        useGhCli: boolean;
        defaultBaseBranch: string;
        owner?: string | undefined;
        repoVisibility?: "public" | "private" | "internal" | undefined;
    }, {
        provider?: "github" | undefined;
        owner?: string | undefined;
        useGhCli?: boolean | undefined;
        repoVisibility?: "public" | "private" | "internal" | undefined;
        defaultBaseBranch?: string | undefined;
    }>>;
    editor: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    plugins: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        config: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        dependencies: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            version: z.ZodOptional<z.ZodString>;
            source: z.ZodOptional<z.ZodEnum<["npm", "git", "local", "remote"]>>;
            url: z.ZodOptional<z.ZodString>;
            path: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        enabled?: string[] | undefined;
        config?: Record<string, any> | undefined;
        dependencies?: Record<string, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }> | undefined;
    }, {
        enabled?: string[] | undefined;
        config?: Record<string, any> | undefined;
        dependencies?: Record<string, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    private: boolean;
    packages: (string | {
        library: boolean;
        startInDocker: boolean;
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    })[];
    version?: string | undefined;
    name?: string | undefined;
    languages?: Record<string, string> | undefined;
    packageManager?: string | undefined;
    github?: {
        provider: "github";
        useGhCli: boolean;
        defaultBaseBranch: string;
        owner?: string | undefined;
        repoVisibility?: "public" | "private" | "internal" | undefined;
    } | undefined;
    repos?: (string | {
        library: boolean;
        startInDocker: boolean;
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    })[] | undefined;
    editor?: string | string[] | undefined;
    plugins?: {
        enabled?: string[] | undefined;
        config?: Record<string, any> | undefined;
        dependencies?: Record<string, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }> | undefined;
    } | undefined;
}, {
    packages: (string | {
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        library?: boolean | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        startInDocker?: boolean | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    })[];
    version?: string | undefined;
    name?: string | undefined;
    languages?: Record<string, string> | undefined;
    packageManager?: string | undefined;
    github?: {
        provider?: "github" | undefined;
        owner?: string | undefined;
        useGhCli?: boolean | undefined;
        repoVisibility?: "public" | "private" | "internal" | undefined;
        defaultBaseBranch?: string | undefined;
    } | undefined;
    private?: boolean | undefined;
    repos?: (string | {
        path?: string | undefined;
        id?: string | undefined;
        location?: string | undefined;
        version?: string | undefined;
        name?: string | undefined;
        gitUrl?: string | undefined;
        repository?: {
            name: string;
            provider: string;
            owner: string;
            branch?: string | undefined;
        } | undefined;
        defaultBranch?: string | undefined;
        tags?: string[] | undefined;
        languages?: string[] | undefined;
        packageManager?: string | undefined;
        library?: boolean | undefined;
        commands?: {
            test?: string | undefined;
            lint?: string | undefined;
            start?: string | undefined;
        } | undefined;
        startInDocker?: boolean | undefined;
        dockerImage?: string | undefined;
        watch?: {
            patterns?: string[] | undefined;
            ignore?: string[] | undefined;
            customCommand?: string | undefined;
        } | undefined;
        requiredPlugins?: string[] | undefined;
    })[] | undefined;
    editor?: string | string[] | undefined;
    plugins?: {
        enabled?: string[] | undefined;
        config?: Record<string, any> | undefined;
        dependencies?: Record<string, {
            path?: string | undefined;
            url?: string | undefined;
            version?: string | undefined;
            source?: "npm" | "git" | "local" | "remote" | undefined;
        }> | undefined;
    } | undefined;
}>;
export type VersionPolicy = z.infer<typeof VersionPolicySchema>;
export type LanguagesConfig = z.infer<typeof LanguagesConfigSchema>;
export type RepoCommands = z.infer<typeof RepoCommandsSchema>;
export type WatchConfig = z.infer<typeof WatchConfigSchema>;
export type Package = z.infer<typeof PackageSchema>;
export type Repo = Package;
export type PackageManagerConfig = z.infer<typeof PackageManagerConfigSchema>;
export type GitHubConfig = z.infer<typeof GitHubConfigSchema>;
export type EditorConfig = z.infer<typeof EditorConfigSchema>;
export type PluginDependency = z.infer<typeof PluginDependencySchema>;
export type PluginConfig = z.infer<typeof PluginConfigSchema>;
export type ProjectConfig = z.infer<typeof ProjectConfigSchema>;
export type BaselineConfig = z.infer<typeof BaselineConfigSchema>;
export interface NormalizedPackage {
    id: string;
    name: string;
    location?: string;
    gitUrl?: string;
    version?: string;
    repository?: {
        provider: string;
        owner: string;
        name: string;
        branch?: string;
    };
    defaultBranch: string;
    path: string;
    tags?: string[];
    languages?: string[];
    packageManager?: string;
    library: boolean;
    commands?: RepoCommands;
    startInDocker: boolean;
    dockerImage?: string;
    watch?: WatchConfig;
    requiredPlugins?: string[];
}
export type NormalizedRepo = NormalizedPackage;
//# sourceMappingURL=config.d.ts.map