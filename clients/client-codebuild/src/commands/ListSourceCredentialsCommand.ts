// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CodeBuildClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeBuildClient";
import { ListSourceCredentialsInput, ListSourceCredentialsOutput } from "../models/models_0";
import { de_ListSourceCredentialsCommand, se_ListSourceCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSourceCredentialsCommand}.
 */
export interface ListSourceCredentialsCommandInput extends ListSourceCredentialsInput {}
/**
 * @public
 *
 * The output of {@link ListSourceCredentialsCommand}.
 */
export interface ListSourceCredentialsCommandOutput extends ListSourceCredentialsOutput, __MetadataBearer {}

/**
 * @public
 * <p> Returns a list of <code>SourceCredentialsInfo</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListSourceCredentialsCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListSourceCredentialsCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const input = {};
 * const command = new ListSourceCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceCredentialsOutput
 * //   sourceCredentialsInfos: [ // SourceCredentialsInfos
 * //     { // SourceCredentialsInfo
 * //       arn: "STRING_VALUE",
 * //       serverType: "GITHUB" || "BITBUCKET" || "GITHUB_ENTERPRISE",
 * //       authType: "OAUTH" || "BASIC_AUTH" || "PERSONAL_ACCESS_TOKEN",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSourceCredentialsCommandInput - {@link ListSourceCredentialsCommandInput}
 * @returns {@link ListSourceCredentialsCommandOutput}
 * @see {@link ListSourceCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListSourceCredentialsCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for CodeBuildClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input value that was provided is not valid.</p>
 *
 * @throws {@link CodeBuildServiceException}
 * <p>Base exception class for all service exceptions from CodeBuild service.</p>
 *
 */
export class ListSourceCredentialsCommand extends $Command<
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
  CodeBuildClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListSourceCredentialsCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeBuildClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSourceCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeBuildClient";
    const commandName = "ListSourceCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CodeBuild_20161006",
        operation: "ListSourceCredentials",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListSourceCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSourceCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSourceCredentialsCommandOutput> {
    return de_ListSourceCredentialsCommand(output, context);
  }
}
